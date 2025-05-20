/* eslint-disable @typescript-eslint/no-explicit-any */
import AddContent from '@/components/AddContent';

const renderAddContent = (section: string, onSaveHandler: any, onChangeHandler: any, formData: any) => {
  switch (section) {
    case 'expertise':
    case 'hobby':
    case 'language':
    case 'skill':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          {Array.from({ length: 1 }).map((_, index) => (
            <input
              key={index}
              className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder={`Them ${section} ...`}
              value={formData[section]}
              onChange={(e) => onChangeHandler(section, e.target.value)}
            />
          ))}
        </AddContent>
      );
    case 'image':
    case 'video':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <input
            type='file'
            accept='image/*'
            className='text-[13px] font-normal'
            onChange={(e: any) => onChangeHandler(section, e.target.files[0])}
          />
        </AddContent>
      );
    case 'experience':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <div className='w-full flex flex-row items-center justify-between'>
            <input
              className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder={`Them ${section} ...`}
              value={formData.experience.title}
              onChange={(e) => onChangeHandler('experience', { ...formData.experience, title: e.target.value })}
            />
            <input
              className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder='Thoi gian ...'
              value={formData.experience.year}
              onChange={(e) => onChangeHandler('experience', { ...formData.experience, year: e.target.value })}
            />
          </div>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Them ${section} ...`}
            value={formData.experience.company}
            onChange={(e) => onChangeHandler('experience', { ...formData.experience, company: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Them ${section} ...`}
            value={formData.experience.detail}
            onChange={(e) => onChangeHandler('experience', { ...formData.experience, detail: e.target.value })}
          />
        </AddContent>
      );
    case 'education':
    case 'certificate':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <div className='w-full flex flex-row items-center justify-between'>
            <input
              className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder={`Them ${section} ...`}
              value={formData[section].title}
              onChange={(e) => onChangeHandler(section, { ...formData[section], title: e.target.value })}
            />
            <input
              className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder='Thoi gian ...'
              value={formData[section].year}
              onChange={(e) => onChangeHandler(section, { ...formData[section], year: e.target.value })}
            />
          </div>
        </AddContent>
      );
    case 'award':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <div className='w-full flex flex-row items-center justify-between'>
            <input
              className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder={`Them ${section} ...`}
              value={formData.award.title}
              onChange={(e) => onChangeHandler('award', { ...formData.award, title: e.target.value })}
            />
            <input
              className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder='Thoi gian ...'
              value={formData.award.year}
              onChange={(e) => onChangeHandler('award', { ...formData.award, year: e.target.value })}
            />
          </div>
        </AddContent>
      );
    case 'letter':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder='Kính gửi'
            value={formData.letter.dear}
            onChange={(e) => onChangeHandler('letter', { ...formData.letter, dear: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Nội dung thư`}
            value={formData.letter.content}
            onChange={(e) => onChangeHandler('letter', { ...formData.letter, content: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Trân trọng`}
            value={formData.letter.signature}
            onChange={(e) => onChangeHandler('letter', { ...formData.letter, signature: e.target.value })}
          />
        </AddContent>
      );
    case 'information':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder='Lĩnh vực'
            value={formData.information.field}
            onChange={(e) => onChangeHandler('information', { ...formData.information, field: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Email`}
            value={formData.information.email}
            onChange={(e) => onChangeHandler('information', { ...formData.information, email: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Số điện thoại`}
            value={formData.information.phone}
            onChange={(e) => onChangeHandler('information', { ...formData.information, phone: e.target.value })}
          />
        </AddContent>
      );
    case 'workPlace':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <div className='w-full flex flex-row items-center justify-between'>
            <input
              className='w-2/3 border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder={`Them ${section} ...`}
              value={formData.workPlace.coordinate}
              onChange={(e) => onChangeHandler(section, { ...formData.workPlace, coordinate: e.target.value })}
            />
            <input
              className='w-[30%] border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
              type='text'
              placeholder='Toa do ...'
              value={formData.workPlace.latitude}
              onChange={(e) => onChangeHandler(section, { ...formData.workPlace, latitude: e.target.value })}
            />
          </div>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder='Quoc tich'
            value={formData.workPlace.national}
            onChange={(e) => onChangeHandler('workPlace', { ...formData.workPlace, national: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Thanh pho`}
            value={formData.workPlace.city}
            onChange={(e) => onChangeHandler('workPlace', { ...formData.workPlace, city: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Huyen`}
            value={formData.workPlace.district}
            onChange={(e) => onChangeHandler('workPlace', { ...formData.workPlace, district: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Xa`}
            value={formData.workPlace.village}
            onChange={(e) => onChangeHandler('workPlace', { ...formData.workPlace, village: e.target.value })}
          />
        </AddContent>
      );
    case 'address':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder='Quoc tich'
            value={formData.address.national}
            onChange={(e) => onChangeHandler('address', { ...formData.address, national: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Thanh pho`}
            value={formData.address.city}
            onChange={(e) => onChangeHandler('address', { ...formData.address, city: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Huyen`}
            value={formData.address.district}
            onChange={(e) => onChangeHandler('address', { ...formData.address, district: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Xa`}
            value={formData.address.village}
            onChange={(e) => onChangeHandler('address', { ...formData.address, village: e.target.value })}
          />
        </AddContent>
      );
    case 'contact_information':
      return (
        <AddContent onSave={(e) => onSaveHandler(e, section)}>
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder='Người thực hiện'
            value={formData.contact_information.createBy}
            onChange={(e) => onChangeHandler('contact_information', { ...formData.contact_information, createBy: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Email`}
            value={formData.contact_information.email}
            onChange={(e) => onChangeHandler('contact_information', { ...formData.contact_information, email: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Số điện thoại`}
            value={formData.contact_information.phone}
            onChange={(e) => onChangeHandler('contact_information', { ...formData.contact_information, phone: e.target.value })}
          />
          <input
            className='w-full border border-slate-500 focus:border focus:border-green-500 rounded-sm px-2 py-1'
            type='text'
            placeholder={`Ghi chú`}
            value={formData.contact_information.note}
            onChange={(e) => onChangeHandler('contact_information', { ...formData.contact_information, note: e.target.value })}
          />
        </AddContent>
      );
    default:
      return;
  }
};

export default renderAddContent;
