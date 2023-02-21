import { Outlet } from 'react-router-dom';
export const Sharedlayout = () => {
  return (
    <>
      <header>
        <nav>header navigation</nav>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
