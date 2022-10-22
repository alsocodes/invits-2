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
import { apiCall } from '../../lib/helper';

const Tamu = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

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
      <div className="borderx border-red-500 w-full h-full py-4 px-6 bg-white">
        <div className="mb-4 flex justify-between items-start">
          <h2 className="text-2xl">Lorem Ipsum</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Pesan/Doa</th>
                <th>Konfirmasi</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody className="">
              {data?.map((row: any, i: number) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{row?.guestName}</td>
                    <td>{row?.content}</td>
                    <td>{row?.confirm ? 'Datang' : 'Tidak Datang'}</td>
                    {/* <td>
                      <div className="flex gap-1">
                        <button
                          className="btn btn-outline btn-xs"
                          onClick={() => onDeleteTamu(row)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Alamat</th>
                <th>Phone</th>
                {/* <th>Action</th> */}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="my-2 flex justify-end">
          <div className="btn-group">
            <button className="btn btn-sm btn-outline">
              <FaArrowLeft />{' '}
            </button>
            <button className="btn btn-sm btn-outline">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Tamu;
