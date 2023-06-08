import { useState } from "react";
import { Register, SignIn } from "../component";
import PropertyDetailLayout from "../Layout/PropertyDetailLayout";

export default function Auth() {
  const [authModal, setauthModal] = useState(true);
  return (
    <PropertyDetailLayout>
      <div className="w-full h-full bg-gray-100 z-30 ">
        <div className="w-full sm:w-5/6 md:w-3/6 lg:w-4/6 mx-auto rounded-lg py-2 px-8 bg-color-light-bg">
          {authModal ? (
            <Register setauthModal={setauthModal} />
          ) : (
            <SignIn setauthModal={setauthModal} />
          )}
        </div>
      </div>
    </PropertyDetailLayout>
  );
}
