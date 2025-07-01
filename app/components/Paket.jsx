import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

export default function Paket(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/Dummy/Paket.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch error');
        return res.json();
      })
      .then((json) => {
        console.log("Data ditemukan:", json);
        setData(json);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);
  return(
    <div className="card w-96 bg-base-100 shadow-sm">
    {data.length === 0 ? (
        <p>Loading atau data kosong...</p>
      ) : (
        data.map((paket, index) => (
  <div className="card-body" key={index}>
    <span className="badge badge-xs badge-warning text-white">Elhusain.Travel</span>
    <div className="flex justify-between">
        <h2 className="text-3xl font-bold">{paket.Title}</h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{paket.Jadwal}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{paket.Durasi}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{paket.Seat}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{paket.AvailableSeat}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{paket.BerangkatDari}</span>
      </li>
    </ul>
    <div className="mt-6">
      <Link to="/paket">
      <button className="btn btn-warning btn-block text-white" >Lihat Detail</button>
      </Link>
    </div>
  </div>
    ))
    )}
          </div>

  )
}