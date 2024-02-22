import { Toast } from "../components/Toast";
import { UploadImage } from "../components/UploadImage";

export default function Home() {
  return (
    <>
      <Toast />
      <main className="bg-background w-full h-screen flex flex-center justify-center">
        <div className="w-full max-w-[420px] bg-white rouded-xl drop-shadow-md p-8">
          <UploadImage />
        </div>
      </main>
    </>
  );
}
