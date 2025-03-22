function Navbar() {

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">


                <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" style={{ borderLeft: "1px solid #00cfdd ", borderRight: "1px solid #00cfdd;" }}>
                    <div className="app-brand demo" style={{ borderBottom: "1px solid #00cfdd" }}>
                        <span className="app-brand-logo demo">
                            <img src="public/images/vite.svg" className="img"
                                alt="Auth Cover Bg color" />
                        </span>
                        <span className="app-brand-text demo menu-text fw-bold ms-2"><small>القائمة</small>  </span>

                        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                            <i className="bx menu-toggle-icon fs-4 d-none d-xl-block align-middle" style={{ color: "#00cfdd;" }}></i>
                            <i className="bx bx-x bx-sm d-xl-none d-block align-middle"></i>

                        </a>
                    </div>

                    <div className="menu-divider mt-0" ></div>

                    <div className="menu-inner-shadow" ></div>

                    <ul className="menu-inner py-1 fontstyle" >
                        {/* <!-- Dashboards --> */}
                        <li className="menu-item">
                            <a className="menu-link fontstyle">
                                <i className="menu-icon tf-icons bx bx-home-circle text-info"></i>
                                <div data-i18n="  قائمة رئيسية    "> قائمة رئيسية </div>
                            </a>
                        </li>


                        <li className="menu-item fontstyle">
                            <a href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
                                <i className="menu-icon tf-icons fa fa-users  text-info"></i>
                                <div data-i18n=" ادارة المستخدمين  ">  ادارة المستخدمين  </div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <a  className="menu-link  text-info">
                                        <small>  <div data-i18n="   ادارة المستخدمين  "> ادارة المستخدمين </div></small>
                                    </a>
                                </li>
                                <li className="menu-item ">
                                    <a className="menu-link text-info">
                                        <small>  <div data-i18n="   العمليات من قبل المستخدمين  ">  العمليات من قبل المستخدمين  </div></small>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* <!-- @*   end      *@ --> */}
                        {/* <!-- @*  start   أدارة الفعاليات  *@ --> */}
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
                                <i className="menu-icon tf-icons fa fa-hospital  text-info"></i>
                                <div data-i18n="  أدارة الفعاليات  ">أدارة الفعاليات </div>
                            </a>
                            <ul className="menu-sub">
                                {/* <!-- @*  start  أنشاء فعالية *@ --> */}
                                <li className="menu-item">
                                    <a className="menu-link  text-info">
                                        <small>
                                            <div data-i18n="   أنشاء فعالية  ">
                                                أنشاء فعالية
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end     أنشاء فعالية *@ --> */}

                                {/* <!-- @*  start  الفرص الأستثمارية  *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link  text-info">
                                        <small>
                                            <div data-i18n="   الفرص الأستثمارية ">
                                                الفرص الأستثمارية
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end   الفرص الأستثمارية   *@ --> */}

                                {/* <!-- @*  start الفئة المستهدفة  *@ --> */}
                                <li className="menu-item">
                                    <a className="menu-link  text-info">
                                        <small>
                                            <div data-i18n="  الفئة المستهدفة ">
                                                الفئة المستهدفة
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    الفئة المستهدفة  *@ --> */}

                                {/* <!-- @*   start     أعداد اللجة االتحضيرية   *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small> <div data-i18n="  أعداد اللجة االتحضيرية   ">  أعداد اللجة االتحضيرية </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    أعداد اللجة االتحضيرية   *@ --> */}

                                {/* <!-- @*   start     أعداد طاقم العمل   *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small> <div data-i18n="  أعداد طاقم العمل   ">  أعداد طاقم العمل </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end     أعداد طاقم العمل  *@ --> */}

                                {/* <!-- @*   start      أعداد الموازنة  *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small> <div data-i18n="  أعداد الموازنة   "> أعداد الموازنة  </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end     أعداد الموازنة  *@ --> */}


                                {/* <!-- @*  start  أعداد  المستلزمات  *@ --> */}
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle text-info">
                                        <small> أعداد  المستلزمات    </small>
                                    </a>
                                    <ul className="menu-sub">
                                        {/* <!-- @*  start    طلب المستلزمات   *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <small>
                                                        <div data-i18n="  طلب المستلزمات  ">
                                                            طلب المستلزمات
                                                        </div>
                                                    </small>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end    طلب المستلزمات    *@ --> */}

                                        {/* <!-- @*  start   مراجعة طلبات المستلزمات  *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" مراجعة طلبات المستلزمات  ">
                                                        مراجعة طلبات المستلزمات
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     مراجعة طلبات المستلزمات  *@ --> */}
                                    </ul>
                                </li>
                                {/* <!-- @*   end   أعداد  المستلزمات    *@ --> */}


                                {/* <!-- @*  start  أعداد التنسيقات *@ --> */}
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle text-info">
                                        <small>
                                            أعداد التنسيقات
                                        </small>
                                    </a>
                                    <ul className="menu-sub">
                                        {/* <!-- @*  start      طلب التنسيقات *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n="      طلب التنسيقات  ">
                                                        طلب التنسيقات
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end      طلب التنسيقات    *@ --> */}

                                        {/* <!-- @*  start  مراجعة طلبات التنسيقات  *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" مراجعة طلبات التنسيقات  ">
                                                        مراجعة طلبات التنسيقات
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     مراجعة طلبات التنسيقات  *@ --> */}
                                    </ul>
                                </li>
                                {/* <!-- @*   end      أعداد التنسيقات   *@ --> */}

                                {/* <!-- @*   start      أعداد الخطة الزمنية  *@ --> */}
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle text-info">
                                        <small> أعداد الخطة الزمنية   </small>
                                    </a>
                                    <ul className="menu-sub">
                                        {/* <!-- @*   start     أعداد الأنشطة     *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" أعداد الأنشطة   ">
                                                        أعداد الأنشطة
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     أعداد الأنشطة    *@ --> */}

                                        {/* <!-- @*   start    أعداد المٌخرج    *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" أعداد المٌخرج  ">
                                                        أعداد المٌخرج
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     أعداد المٌخرج  *@ --> */}

                                        {/* <!-- @*   start    أعداد تسجيل الحضور    *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" أعداد تسجيل الحضور   ">
                                                        أعداد تسجيل الحضور
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     أعداد تسجيل الحضور   *@ --> */}

                                        {/* <!-- @*   start    أعداد التوثيق    *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n="  أعداد التوثيق   ">
                                                        أعداد التوثيق
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end      أعداد التوثيق   *@ --> */}

                                        {/* <!-- @*   start      أعداد الحملة الترويجية  *@ --> */}
                                        <li className="menu-item">
                                            <a  className="menu-link fontstyle">
                                                <small>
                                                    <div data-i18n=" أعداد الحملة الترويجية  ">
                                                        أعداد الحملة الترويجية
                                                    </div>
                                                </small>
                                            </a>
                                        </li>
                                        {/* <!-- @*   end     أعداد الحملة الترويجية  *@ --> */}
                                    </ul>
                                </li>
                                {/* <!-- @*   end      أعداد الخطة الزمنية   *@ --> */}

                                {/* <!-- @*   start    أعداد قائمة المدعوين     *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small> <div data-i18n="   أعداد قائمة المدعوين  "> أعداد قائمة المدعوين  </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    أعداد قائمة المدعوين    *@ --> */}

                                {/* <!-- @*   start     أعداد قائمة المشاركين    *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small><div data-i18n="  أعداد قائمة المشاركين   "> أعداد قائمة المشاركين  </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    أعداد قائمة المشاركين    *@ --> */}

                                {/* <!-- @*   start   أعداد قائمة الزوار      *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small><div data-i18n="   أعداد قائمة الزوار   "> أعداد قائمة الزوار   </div></small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    أعداد قائمة الزوار    *@ --> */}

                            </ul>
                        </li>
                        {/* <!-- @*   end    أدارة الفعاليات  *@ --> */}


                        {/* <!-- @*  start  إدارة محتوى الموقع  *@ --> */}
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle fontstyle">
                                <i className="menu-icon tf-icons fa fa-laptop text-info "></i>
                                <div data-i18n="  إدارة محتوى الموقع    "> إدارة محتوى الموقع  </div>
                            </a>
                            <ul className="menu-sub">
                                {/* <!-- @*  start      أضافة الفعالية الى الموقع *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small>
                                            <div data-i18n="       أضافة الفعالية الى الموقع  ">
                                                أضافة الفعالية الى الموقع
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end      أضافة الفعالية الى الموقع   *@ --> */}

                                {/* <!-- @*  start      أضافة الأخبار الى الموقع *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small>
                                            <div data-i18n="       أضافة الأخبار الى الموقع  ">
                                                أضافة الأخبار الى الموقع
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end      أضافة الأخبار الى الموقع   *@ --> */}

                                {/* <!-- @*  start  مراجعة التقييمات  *@ --> */}
                                <li className="menu-item">
                                    <a  className="menu-link text-info">
                                        <small>
                                            <div data-i18n=" مراجعة التقييمات   ">
                                                مراجعة التقييمات
                                            </div>
                                        </small>
                                    </a>
                                </li>
                                {/* <!-- @*   end    مراجعة التقييمات  *@ --> */}
                            </ul>
                        </li>
                        {/* <!-- @*   end       إدارة محتوى الموقع *@ --> */}

                        {/* <!-- @*  start  التقارير *@ --> */}
                        <li className="menu-item">
                            <a  className="menu-link fontstyle">
                                <i className="menu-icon tf-icons fa fa-book-open text-info "></i>
                                <div data-i18n="  التقارير   ">
                                    التقارير
                                </div>
                            </a>
                        </li>
                        {/* <!-- @*   end     التقارير  *@ --> */}

                    </ul>
                </aside>

                <div className="layout-page">

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

                                    {/* <!-- Notification --> */}
                                    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside" aria-expanded="false">
                                            <i className="bx bx-bell bx-sm"></i>
                                            <span className="badge rounded-pill badge-notifications bg-danger">1</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end py-0">
                                            <li className="dropdown-menu-header border-bottom">
                                                <div className="dropdown-header d-flex align-items-center py-3">
                                                    <h5 className="text-body me-auto mb-0">الرسائل </h5>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-all text-body"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i
                                                            className="bx fs-4 bx-envelope-open"></i></a>
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
                                                                <h6 className="mb-1"> هاشم الريمي</h6>
                                                                <p className="mb-0">كيفك ياشيخ مختار </p>
                                                                <small className="text-muted">صديق الجامعة</small>
                                                            </div>
                                                            <div className="dropdown-notifications-actions flex-shrink-0">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"><span
                                                                    className="badge badge-dot"></span></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"><span
                                                                    className="bx bx-x"></span></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li  >

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
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="3">
                                                    <i className="bx bx-user me-2"></i>
                                                    <span className="align-middle">من أنا </span>
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
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="bx bx-support me-2"></i>
                                                    <span className="align-middle">مساعدة</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="bx bx-help-circle me-2"></i>
                                                    <span className="align-middle">الأسئلة الشائعة </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-pricing.html">
                                                    <i className="bx bx-dollar me-2"></i>
                                                    <span className="align-middle">التسعير</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
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
                    <hr style={{ height: " 1px; color: #00cfdd;", margin: 0, padding: 0, }} />

                    <div className="content-wrapper">

                        <div className="row my-12">


                            {/* <!-- Form with Tabs --> */}

                            <div className="content-wrapper">




                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar