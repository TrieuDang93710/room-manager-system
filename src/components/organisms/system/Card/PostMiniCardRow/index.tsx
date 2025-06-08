/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRightOutlined } from '@ant-design/icons';
import CardRow from '../Row';
interface PostMiniCardRowProps {
  postItem?: any;
  onClick?: () => void;
}

const PostMiniCardRow = ({ postItem, onClick }: PostMiniCardRowProps) => {
  if (!postItem) {
    return 'Not found';
  }

  return (
    <CardRow logo={postItem && postItem.company.logo}>
      <div className='w-full h-full flex flex-row items-center justify-between gap-2'>
        <div className='w-full h-full p-2'>
          <h3 className='w-[60%] text-[18px] text-black dark:text-blue-600 font-bold py-2 line-clamp-2'>
            {postItem && postItem!.title}
          </h3>
          <h3 className='text-[18px] text-black dark:text-blue-600 font-normal line-clamp-2'>
            {postItem && postItem!.company.title}
          </h3>
        </div>
        <ArrowRightOutlined onClick={onClick} className='text-slate-600 hover:text-blue-600 cursor-pointer' />
      </div>
    </CardRow>
  );
};

export default PostMiniCardRow;
