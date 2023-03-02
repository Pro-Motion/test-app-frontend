import { Outlet } from 'react-router-dom';
export const Sharedlayout = () => {
  return (
    <>
      <header>
        <nav>header navigation</nav>
      </header>
      <main>
        <div style={{ margin: '0 auto', padding: '0 15px' }}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
