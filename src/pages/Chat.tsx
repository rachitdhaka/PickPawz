import { BackgroundBeams } from "../components/ui/background-beams";

const Chat = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4 selection:bg-white selection:text-black">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-6xl">
          Under Maintenance
        </h1>

        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          We're working hard to improve your experience. Please check back soon.
          Thank you for your patience!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Chat;
