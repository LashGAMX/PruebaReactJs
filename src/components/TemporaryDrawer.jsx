import { hover } from '@testing-library/user-event/dist/hover';
import * as React from 'react';


export default function TemporaryDrawer() {

  return (
    <>
 <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active bgMenu"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </>
  );
}