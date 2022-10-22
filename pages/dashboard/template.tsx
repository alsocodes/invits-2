import React, { useState, useEffect } from 'react';
import Dashboard from '../../components/layout/Dashboard';
import { useForm } from 'react-hook-form';
import { apiCall } from '../../lib/helper';

const Template = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const template1 = `_Assalamu'alaikum Warahmatullahi Wabarakaatuh_\r\n\r\nTanpa mengurangi rasa hormat, izinkan kami mengundang Bapak/Ibu/Saudara/i *__thename__*  untuk hadir serta memberikan do'a restu pada acara pernikahan kami.\r\n\r\nUntuk detail acara, lokasi, dan ucapan bisa klik link dibawah ini:\r\nhttps://vegafirdaus.invits.my.id/__theid__\r\n\r\nMerupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i *__thename__* berkenan hadir.\r\n\r\nDo'a restu Anda merupakan hadiah terindah bagi kami.\r\n\r\nAtas kehadiran dan do'a restu yang telah diberikan, kami ucapkan terima kasih.\r\n\r\n_Wassalamu'alaikum Warahmatullahi Wabarakatuh._`;
  const [template, setTempate] = useState(null);
  const getTemplate = () => {
    fetch(`/api/template?id=template1`).then((data) => {
      // setTempate(data);
      console.log('xna', data);
    });
  };
  const simpanTemplate = (data) => {
    apiCall('POST', '/api/template', {
      templateId: template?.templateId,
      template: data?.template,
    }).then((data) => {
      getTemplate();
    });
  };

  useEffect(() => {
    getTemplate();
  }, []);

  return (
    <Dashboard data={{ title: 'Dashboard Invits', menuActive: 'template' }}>
      <div className="borderx border-red-500 w-full h-full py-4 px-6 bg-white">
        <div className="mb-4 flex justify-between items-start">
          <h2 className="text-2xl">Template</h2>
        </div>
        <div className="flex gap-4">
          <div className="card w-1/2 mt-2 bg-white shadow-md">
            <div className="card-body">
              <form onSubmit={handleSubmit(simpanTemplate)}>
                <textarea
                  className="textarea w-full"
                  rows={10}
                  value={template1}
                  placeholder="Template"
                  {...register('template', { required: true })}
                />
              </form>
              <div>
                <button className="btn btn-primary">SIMPAN</button>
              </div>
            </div>
          </div>
          <div className="card w-1/2 mt-2 bg-white shadow-md">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Template;
