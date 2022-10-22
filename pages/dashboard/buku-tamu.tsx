import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Dashboard from '../../components/layout/Dashboard';
import { apiCall } from '../../lib/helper';

const perPage = 10;
const Tamu = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
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
    fetch(`/api/messages`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        // setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [search]);

  const onTambah = () => {
    setFormData({
      name: '',
      address: '',
      phone: '',
    });
  };

  // const onDeleteTamu = (data) => {
  //   if (confirm('Apakah anda yakin akan menghapus?')) {
  //     apiCall('DELETE', `/api/messages/${data?.guestId}`).then((data) => {
  //       getData();
  //     });
  //   }
  // };

  return (
    <Dashboard data={{ title: 'Dashboard Invits', menuActive: 'buku-tamu' }}>
      <div className='borderx border-red-500 w-full h-full py-4 px-6 bg-white'>
        <div className='mb-4 flex justify-between items-start'>
          <h2 className='text-2xl'>Buku Tamu</h2>
        </div>
        <div className='overflow-x-auto'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Pesan/Doa</th>
                <th>Konfirmasi</th>
                {/* <th>Action</th> */}
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
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{row?.guestName}</td>
                      <td>{row?.content}</td>
                      <td>{row?.confirm ? 'Datang' : 'Tidak Datang'}</td>
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
    </Dashboard>
  );
};

export default Tamu;
