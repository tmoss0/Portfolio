/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              About
            </a>
          </li>
          <li>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
          <li>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              Projects
            </a>
          </li>
          <li>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout;
