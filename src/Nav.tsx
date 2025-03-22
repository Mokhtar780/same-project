// Nav.tsx
import React from 'react';

const Nav: React.FC = () => {


  return (
    <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar" >
    <div className="container-fluid">
      <div className="layout-menu-toggle navbar-nav d-xl-none align-items-xl-center me-3 me-xl-0">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>
  
      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
  
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* <!-- Language --> */}
          <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <i className="flag-icon flag-icon-us flag-icon-squared fs-3 rounded-circle me-1"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
  
              <li>
                <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                  <i className="flag-icon flag-icon-ye flag-icon-squared fs-4 rounded-circle me-1"></i>
                  <span className="align-middle"> Arabic & اللغة العربية </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                  <i className="flag-icon flag-icon-us flag-icon-squared fs-4 rounded-circle me-1"></i>
                  <span className="align-middle">English & الانجليزي</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!--/ Language --> */}

            {/* Style Switcher */}
            <li className="nav-item me-2 me-xl-0">
              <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                <i className="bx bx-sm"></i>
              </a>
            </li>

            {/* <!-- Style Switcher --> */}
                <li className="nav-item me-2 me-xl-0">
                  <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                    <i className="bx bx-sm"></i>
                  </a>
                </li>
                {/* <!--/ Style Switcher --> */}

           
            {/* <!-- Quick links  --> */}
                <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside" aria-expanded="false">
                    <i className="bx bx-grid-alt bx-sm"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end py-0">
                    <div className="dropdown-menu-header border-bottom">
                      <div className="dropdown-header d-flex align-items-center py-3">
                        <h5 className="text-body me-auto mb-0">أختصارات</h5>
                        <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Add shortcuts"><i className="bx bx-sm bx-plus-circle"></i></a>
                      </div>
                    </div>
                    <div className="dropdown-shortcuts-list scrollable-container">
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                            <i className="bx bx-calendar fs-4"></i>
                          </span>
                          <a href="app-calendar.html" className="stretched-link"> التقويم </a>
                          <small className="text-muted mb-0">الموعد</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                            <i className="bx bx-help-circle fs-4"></i>
                          </span>
                          <a href="pages-help-center-landing.html" className="stretched-link">مساعدة </a>
                          <small className="text-muted mb-0">مساعدة من جوجل </small>
                        </div>
                      </div>
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                            <i className="bx bx-user fs-4"></i>
                          </span>
                          <a href="app-user-list.html" className="stretched-link">المستخدم</a>
                          <small className="text-muted mb-0"> مدير المستخدمين</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                            <i className="bx bx-cog fs-4"></i>
                          </span>
                          <a href="pages-account-settings-account.html" className="stretched-link">الضبط</a>
                          <small className="text-muted mb-0">ضبط الاعدادات </small>
                        </div>
                      </div>
                      <div className="row row-bordered overflow-visible g-0">
                      </div>

                    </div>
                  </div>
                </li>
                {/* <!-- Quick links --> */}

            {/* Notifications Dropdown */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <i className="bx bx-bell bx-sm"></i>
                <span className="badge rounded-pill badge-notifications bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body me-auto mb-0">الرسائل</h5>
                    <a href="javascript:void(0)" className="dropdown-notifications-all text-body" title="Mark all as read">
                      <i className="bx fs-4 bx-envelope-open"></i>
                    </a>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src="public/images/My-image.jpg" alt=" " className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">هاشم الريمي</h6>
                          <p className="mb-0">كيفك ياشيخ مختار</p>
                          <small className="text-muted">صديق الجامعة</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* User Dropdown */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="public/images/My-image.jpg" alt=" " className="rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="pages-account-settings-account.html">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="public/images/My-image.jpg" alt=" " className="rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="lh-1 d-block fw-semibold">مختار حميد</span>
                        <small>مشرف</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li><div className="dropdown-divider"></div></li>
                <li>
                  <a className="dropdown-item" href="3">
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">من أنا</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">الضبط</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    <span className="d-flex align-items-center align-middle">
                      <i className="bx bx-credit-card flex-shrink-0 me-2"></i>
                      <span className="flex-grow-1 align-middle">الفواتير</span>
                      <span className="badge badge-center rounded-pill w-px-20 h-px-20 flex-shrink-0 bg-danger">4</span>
                    </span>
                  </a>
                </li>
                <li><div className="dropdown-divider"></div></li>
                <li>
                  <a className="dropdown-item" href="/">
                    <i className="bx bx-support me-2"></i>
                    <span className="align-middle">مساعدة</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    <i className="bx bx-help-circle me-2"></i>
                    <span className="align-middle">الأسئلة الشائعة</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-pricing.html">
                    <i className="bx bx-dollar me-2"></i>
                    <span className="align-middle">التسعير</span>
                  </a>
                </li>
                <li><div className="dropdown-divider"></div></li>
                <li>
                  <a className="dropdown-item" href="/" target="_blank">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">المغادرة</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;