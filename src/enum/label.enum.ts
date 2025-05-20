enum LabelType {
  EXPERTISE = 'expertise',
  HOBBY = 'hobby',
  LANGUAGE = 'language',
  SKILL = 'skill',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CERTIFICATE = 'certificate',
  AWARD = 'award'
}

const labels = {
  expertise: 'Chuyên môn',
  hobby: 'Sở thích',
  language: 'Ngôn ngữ',
  skill: 'Kỹ năng',
  experience: 'Kinh nghiệm',
  education: 'Giáo dục',
  certificate: 'Chứng chỉ',
  award: 'Giải thưỡng',
  image: 'Hình ảnh',
  video: 'Video',
  banner: 'Ảnh banner'
};

export { labels };
export default LabelType;
