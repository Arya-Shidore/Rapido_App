import React from 'react';

const Start = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-gray-100 p-4 bg-cover bg-center"
      style={{
        // adjust ht and wt
        backgroundImage:
          "url('https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-c334-61f7-a8f5-6e35042db357/raw?se=2025-04-11T17%3A58%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=b04ffc22-5db7-5c6d-9072-b2ab75d2828a&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T22%3A08%3A36Z&ske=2025-04-11T22%3A08%3A36Z&sks=b&skv=2024-08-04&sig=TsqXfYFLvyD%2BWpmWe2K4ixmVXaTRz09cHnlDG/arNDw%3D')",
        }}
    >
      {/* Header */}
      <header className="text-center pt-10 bg-opacity-70 p-4 rounded">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Uber</h1>
        <p className="text-lg text-black mt-2">Your ride, on demand</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-opacity-70 p-6 rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-48 h-auto mb-4"
        />
        <img
          src="https://media.tenor.com/9vYtVjQz4ssAAAAC/car-driving.gif"
          alt="Animated Car"
          className="w-32 h-auto mb-6"
        />
        <p className="text-lg text-black text-center max-w-md">
          Tap the button below to get started. We'll connect you with a nearby driver.
        </p>
      </main>

      {/* Footer with Continue Button */}
      <footer className="w-full text-center pb-6">
        <button className="w-80 h-10 mx-auto text-base py-1 px-2 border border-black rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            window.location.href = '/login'; // Redirect to login page
          }}
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default Start;
