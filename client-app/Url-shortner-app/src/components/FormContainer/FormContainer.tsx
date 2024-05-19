import * as React from "react";

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="bg-[url('/src/assets/bg.png')] rounded-xl bg-cover bg-center ">
        <div className="w-full h-full rounded-xl p-10 backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">url shortner</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            Pate your untidy link here...
          </p>
          <p className="text-white text-center pb-4 text-sm font-sans">
            free tool to shorten or reduce link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
