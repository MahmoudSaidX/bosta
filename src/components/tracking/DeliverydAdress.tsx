const DeliverydAdress = () => {
  return (
    <div className="w-1/3 px-8">
      <h3 className="my-4">عنوان التسليم</h3>
      <div className="flex flex-col gap-4">
        <div className="rounded-md bg-gray-100 border border-gray-200 p-4">
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٣٣
        </div>
        <div className="flex flex-row justify-between items-center rounded-md bg-white border border-gray-200 p-4">
          <div>
            <img className="w-28" src="/public/vector.webp" alt="bosta" />
          </div>
          <div className="flex flex-col gap-4">
            <h5>هل يوجد مشكلة في شحنتك؟!</h5>
            <button className=" bg-red-600 text-white px-4 py-2 rounded-lg">
              ابلاغ عن مشكلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverydAdress;
