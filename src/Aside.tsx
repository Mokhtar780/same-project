// Aside.tsx
import React from 'react';

const Aside: React.FC = () => {
  return (

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
);
};

export default Aside;