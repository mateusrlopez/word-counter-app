import tw from 'twin.macro';

export const FormContainer = tw.div`
  flex
  flex-col
  items-center
  p-6
  bg-white
  h-80
  w-188
  rounded
`;

export const FormInput = tw.textarea`
  rounded
  outline-none
  p-3
  w-full
  h-52
  resize-none
  border
  border-purple-500
`;

export const FormButtonBar = tw.div`
  w-full
  mt-6
`;

export const FormButton = tw.button`
  rounded
  px-5
  py-2
  cursor-pointer
  font-bold
  mr-1.5
  bg-purple-600
  hover:bg-purple-700
  transition
  ease-in-out
  duration-200
  text-white
  focus:outline-none
`;
