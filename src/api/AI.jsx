
 // this function takes forms data..creates a resume sentence..returns it

export const generateResume = async (data) => {
  return `Hi, I am ${data.name}. I have skills in ${data.skills}. I am a passionate developer.`;
};