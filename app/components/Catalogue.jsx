
export default function Catalogue(){
  return(
    <div className="w-full  py-8 bg-white">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-start mb-8">
         <div>
          <h1 className="text-[20px] font-bold md:ml-20">Paket yang tersedia</h1>
          <h1 className="md:ml-20">Allah tidak memanggil orang - orang yang mampu tapi Allah memampukan orang - orang yang terpanggil untuk berkunjung ke Baitullah</h1>
         </div>
         <div>
          <button className="btn btn-warning text-white hidden flex-none lg:block md:mr-20">Lihat Semua</button>
         </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 p-4 lg:flex-row lg:items-stretch lg:flex-wrap">
            {/* data map */}
        </div>
      </div>
    </div>  
  )
}