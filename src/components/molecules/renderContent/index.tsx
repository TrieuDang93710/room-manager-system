/* eslint-disable @typescript-eslint/no-explicit-any */
import AddComponent from '@/components/molecules/AddComp';
import { labels } from '@/enum/label.enum';
import { StarFilled } from '@ant-design/icons';

const renderContent = (section: string, toggleSection: any, openSections: any, data: any) => {
  switch (section) {
    case 'hobby':
    case 'language':
    case 'skill':
      return (
        <AddComponent
          title={labels[section]}
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          {data[section].map((item: any, index: any) => (
            <h3
              key={index}
              className='text-black dark:text-white text-[14px] font-normal bg-blue-300 px-3 py-1 rounded-lg'
            >
              {item}
            </h3>
          ))}
        </AddComponent>
      );
    case 'expertise':
      return (
        <AddComponent
          title={labels[section]}
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          {data[section].map((item: any, index: any) => (
            <div key={index} className='flex flex-row items-center justify-start gap-4'>
              <h3 className='text-black dark:text-white text-[14px] font-normal bg-blue-300 px-3 py-1 rounded-lg'>
                {item.title}
              </h3>
              <ul className='list-none flex flex-row items-center gap-1'>
                {Array.from({ length: Number((Number(item.level) / 10).toFixed()) }).map((_, index: any) => (
                  <StarFilled key={index} className='text-yellow-500' />
                ))}
              </ul>
            </div>
          ))}
        </AddComponent>
      );
    case 'image':
    case 'video':
      return (
        <AddComponent
          title={labels[section]}
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          {data[section].map((item: any, index: any) => (
            <h3
              key={index}
              className='text-black dark:text-white text-[14px] font-normal bg-blue-300 px-3 py-1 rounded-lg'
            >
              {item.name ? item.name : 'No file selected'}
            </h3>
          ))}
        </AddComponent>
      );
    case 'experience':
      return (
        <AddComponent
          title='Kinh nghiệm'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            {data[section].map((item: any, index: any) => (
              <div
                key={index + 1}
                className='w-full flex flex-col items-start justify-start gap-4 p-2 border border-green-500'
              >
                <div className='w-full flex flex-row items-start justify-between'>
                  <div className='w-1/3 flex flex-col items-start justify-center gap-2'>
                    <h3 className='text-black dark:text-white text-[20px] font-bold line-clamp-2'>{item.title}</h3>
                    <p className='text-black dark:text-white text-[14px] font-normal line-clamp-1'>{item.company}</p>
                  </div>
                  <p className='text-black dark:text-white text-[16px] font-medium'>{item.year}</p>
                </div>
                <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                  {item.detail.split('; ').map((text: any, i: any) => (
                    <li key={i + 1} className='text-black dark:text-white text-[16px] font-normal line-clamp-2'>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AddComponent>
      );
    case 'education':
    case 'certificate':
      return (
        <AddComponent
          title={labels[section]}
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            {data[section].map((item: any, index: any) => (
              <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
                <h3 className='text-black dark:text-white text-[20px] font-bold line-clamp-2'>{item.title}</h3>
                <p className='text-black dark:text-white text-[16px] font-medium'>{item.year}</p>
              </div>
            ))}
          </div>
        </AddComponent>
      );
    case 'award':
      return (
        <AddComponent
          title='Giải thưỡng'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className='w-full flex flex-col items-start justify-start gap-4'>
            {data[section].map((item: any, index: any) => (
              <div key={index} className='w-1/3 flex flex-row items-center justify-between'>
                <h3 className='text-black dark:text-white text-[20px] font-bold line-clamp-2'>{item.title}</h3>
                <p className='text-black dark:text-white text-[16px] font-medium'>{item.year}</p>
              </div>
            ))}
          </div>
        </AddComponent>
      );
    case 'letter':
      return (
        <AddComponent
          title='Thư giới thiệu'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            {data[section].map((item: any, index: any) => (
              <div
                key={index + 1}
                className='w-full flex flex-col items-start justify-start gap-4 p-2 border border-green-500'
              >
                <h3 className='text-black dark:text-white text-[20px] font-bold line-clamp-2'>{item.dear}</h3>

                <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                  {item.content.split('; ').map((text: any, i: any) => (
                    <li key={i + 1} className='text-black dark:text-white text-[16px] font-normal line-clamp-2'>
                      {text}
                    </li>
                  ))}
                </ul>
                <p className='text-black dark:text-white text-[14px] font-normal line-clamp-1'>{item.signature}</p>
              </div>
            ))}
          </div>
        </AddComponent>
      );
    case 'information':
      return (
        <AddComponent
          title='Thông tin doanh nghiệp'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            <div className='w-full flex flex-col items-start justify-start gap-2 p-2 border border-green-500'>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section].field}</h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section].email}</h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section].phone}</h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section].address}</h3>
            </div>
          </div>
        </AddComponent>
      );
    case 'workPlace':
      return (
        <AddComponent
          title='Thông tin doanh nghiệp'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            <div className='w-full flex flex-col items-start justify-start gap-2 p-2 border border-green-500'>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>
                {data[section].coordinate}
              </h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>
                {data[section].latitude}
              </h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-4'>
                {data[section].national} <br /> {data[section].district} <br /> {data[section].city} <br />
                {data[section].village}
              </h3>
            </div>
          </div>
        </AddComponent>
      );
    case 'address':
      return (
        <AddComponent
          title='Thông tin địa chỉ'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            <div className='w-full flex flex-col items-start justify-start gap-2 p-2 border border-green-500'>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-4'>
                {data[section].national} <br /> {data[section].district} <br /> {data[section].city} <br />
                {data[section].village}
              </h3>
            </div>
          </div>
        </AddComponent>
      );
    case 'contact_information':
      return (
        <AddComponent
          title='Thông tin liên hệ'
          action={true}
          onClick={() => toggleSection(section)}
          isButton={openSections[section]}
        >
          <div className={`${data[section] !== null && 'w-[60%]'} flex flex-col items-start justify-start gap-4`}>
            <div className='w-full flex flex-col items-start justify-start gap-2 p-2 border border-green-500'>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>
                {data[section]!.createBy}
              </h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section]!.email}</h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section]!.phone}</h3>
              <h3 className='text-black dark:text-white text-[16px] font-bold line-clamp-2'>{data[section]!.note}</h3>
            </div>
          </div>
        </AddComponent>
      );
    default:
      return;
  }
};

export default renderContent;
