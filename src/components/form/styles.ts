import tw from 'twin.macro';

export const FormContainer = tw.div`
  flex
  flex-col
  items-center
  py-6
  px-3
  rounded
  h-112.5
  w-137.5
`;

export const FormTitle = tw.h1`
  text-center
  text-5xl
  font-extrabold
`;

export const FormInput = tw.textarea`
  rounded
  outline-none
  p-3
  mt-auto
  h-48
  w-full
  resize-none
`;

export const FormButtonBar = tw.div`
  py-2.5
  mt-auto
  w-full
`;

export const FormButton = tw.button`
  rounded
  px-5
  py-2
  cursor-pointer
  font-bold
  mr-1.5
  focus:outline-none
`;
