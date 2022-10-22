import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCopy,
  FaPencilAlt,
  FaShare,
  FaTrash,
} from 'react-icons/fa';
import Dashboard from '../../components/layout/Dashboard';
import { apiCall, CopyMe } from '../../lib/helper';

const perPage = 10;
const Tamu = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [backupData, setBackupData] = useState(null);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [pos, setPos] = useState(0);
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    setDataShow(data?.filter((a, i) => i >= pos && i < pos + perPage, []));
  }, [pos, perPage, data]);

  useEffect(() => {
    setPageCount(Math.ceil(data?.length / perPage));
  }, [data]);

  useEffect(() => {
    setPos(page * perPage);
  }, [page]);

  const onNext = () => {
    if (page === pageCount - 1) return;
    setPage(page + 1);
  };

  const onPrev = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearch(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const [formData, setFormData]: any = useState(false);
  const getData = () => {
    fetch(`/api/guest/data?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setBackupData(data?.data);
        setData(data?.data);
        // setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // getData();
    if (search !== '') {
      setData(
        backupData?.filter(
          (a) => a.name?.toLowerCase().includes(search?.toLowerCase()),
          []
        )
      );
      setPage(0);
    } else {
      setData(backupData);
    }
  }, [search]);

  const onTambah = () => {
    setFormData({
      name: '',
      address: '',
      phone: '',
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmitTamu = (data) => {
    if (data?.guestId) {
      apiCall('PUT', `/api/guest/data/${data?.guestId}`, data).then((data) => {
        getData();
      });
    } else {
      apiCall('POST', '/api/guest/data', data).then((data) => {
        getData();
      });
    }
    setFormData(false);
  };

  const onDeleteTamu = (data) => {
    if (confirm('Apakah anda yakin akan menghapus?')) {
      apiCall('DELETE', `/api/guest/data/${data?.guestId}`).then((data) => {
        getData();
      });
    }
  };

  useEffect(() => {
    if (formData !== false) {
      setValue('guestId', formData?.guestId);
      setValue('name', formData?.name);
      setValue('address', formData?.address);
      setValue('phone', formData?.phone);
    }
  }, [formData]);

  const template = `_Assalamu'alaikum Warahmatullahi Wabarakaatuh_\r\n\r\nTanpa mengurangi rasa hormat, izinkan kami mengundang Bapak/Ibu/Saudara/i *__thename__*  untuk hadir serta memberikan do'a restu pada acara pernikahan kami.\r\n\r\nUntuk detail acara, lokasi, dan ucapan bisa klik link dibawah ini:\r\nhttps://vegafirdaus.invits.my.id?guest=__theid__\r\n\r\nMerupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i *__thename__* berkenan hadir.\r\n\r\nDo'a restu Anda merupakan hadiah terindah bagi kami.\r\n\r\nAtas kehadiran dan do'a restu yang telah diberikan, kami ucapkan terima kasih.\r\n\r\n_Wassalamu'alaikum Warahmatullahi Wabarakatuh._`;
  return (
    <Dashboard data={{ title: 'Dashboard Invits', menuActive: 'tamu' }}>
      <div className='borderx border-red-500 w-full h-full py-4 px-6 bg-white'>
        <div className='mb-4 flex justify-between items-start'>
          <h2 className='text-2xl'>Daftar Tamu Undangan</h2>
        </div>
        <div className='flex justify-between mb-2'>
          <input
            defaultValue={search}
            type='text'
            placeholder='Pencarian'
            className='input w-full max-w-xs input-sm'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => onTambah()} className='btn btn-primary btn-sm'>
            Tambah
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Alamat</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {dataShow?.length === 0 ? (
                <tr>
                  <td colSpan={5} className='text-center'>
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                dataShow?.map((row: any, i: number) => {
                  const textBody = template
                    .replace(/__thename__/g, row.name)
                    .replace(/__theid__/g, row.guestId);
                  return (
                    <tr key={i}>
                      <th>{i + pos + 1}</th>
                      <td>{row?.name}</td>
                      <td>{row?.address}</td>
                      <td>{row?.phone}</td>
                      <td>
                        <div className='flex gap-1'>
                          <a
                            rel='noreferrer'
                            target='_blank'
                            href={`https://wa.me/${
                              row.phone
                            }?text=${encodeURIComponent(textBody)}`}
                          >
                            <button className='btn btn-outline btn-xs'>
                              <FaShare />
                            </button>
                          </a>
                          <button
                            onClick={() =>
                              CopyMe(
                                `https://vegafirdaus.invits.my.id?guest=${row?.guestId}`
                              )
                            }
                            className='btn btn-outline btn-xs mr-4'
                          >
                            <FaCopy />
                          </button>
                          <button
                            className='btn btn-outline btn-xs'
                            onClick={() => setFormData(row)}
                          >
                            <FaPencilAlt />
                          </button>
                          <button
                            className='btn btn-outline btn-xs'
                            onClick={() => onDeleteTamu(row)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Alamat</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='my-2 flex justify-between'>
          <div className='text-xs'>
            <div>
              Page {page + 1}/{pageCount}
            </div>
            <div>
              Menampilkan {pos} s.d {pos + perPage} dari {data?.length} data
            </div>
          </div>
          <div className='btn-group'>
            <button
              className='btn btn-sm btn-outline'
              onClick={() => onPrev()}
              disabled={page === 0}
            >
              <FaArrowLeft />{' '}
            </button>
            <button
              className='btn btn-sm btn-outline'
              onClick={() => onNext()}
              disabled={page === pageCount - 1}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <input
        type='checkbox'
        id='my-modal'
        className='modal-toggle'
        checked={!!formData}
      />
      <div className='modal'>
        <div className='modal-box w-full bg-white'>
          <form onSubmit={handleSubmit(onSubmitTamu)}>
            <h3 className='font-bold text-lg'>
              {formData?.guestId ? 'Update Tamu' : 'Tambah Tamu'}
            </h3>
            <div className='form-control my-4 mt-4'>
              <input
                type='text'
                placeholder='Nama'
                className='input w-full input-md'
                {...register('name', { required: 'harus diisi' })}
              />
            </div>
            <div className='form-control my-4'>
              <input
                type='text'
                placeholder='Nomor Handphone'
                className='input w-full input-md '
                {...register('phone', { required: true })}
              />
            </div>
            <div className='form-control my-4'>
              <textarea
                className='textarea'
                placeholder='Alamat'
                {...register('address', { required: true })}
              />
            </div>
            <div className='modal-action flex justify-between'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setFormData(false)}
              >
                Batal
              </button>
              <button type='submit' className='btn btn-primary'>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default Tamu;
