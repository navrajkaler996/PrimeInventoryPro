export const meatData = [
  {
    product_name: 'Chicken Drumsticks',
    product_code: 'FREMEA001',
    price: 4.99,
    total_quantity: 200,
    cap: 100,
    product_stock_alert: false,
  },
  {
    product_name: 'Beef Ground Chuck',
    product_code: 'FREMEA002',
    price: 6.49,
    total_quantity: 150,
    cap: 75,
    product_stock_alert: true,
  },
  {
    product_name: 'Pork Tenderloin',
    product_code: 'FREMEA003',
    price: 8.99,
    total_quantity: 100,
    cap: 50,
    product_stock_alert: false,
  },
  {
    product_name: 'Lamb Chops',
    product_code: 'FREMEA004',
    price: 9.99,
    total_quantity: 80,
    cap: 40,
    product_stock_alert: true,
  },
  {
    product_name: 'Ground Turkey',
    product_code: 'FREMEA005',
    price: 5.49,
    total_quantity: 120,
    cap: 60,
    product_stock_alert: false,
  },
  {
    product_name: 'Salmon Fillet',
    product_code: 'FREMEA006',
    price: 12.99,
    total_quantity: 90,
    cap: 45,
    product_stock_alert: false,
  },
  {
    product_name: 'Bacon Strips',
    product_code: 'FREMEA007',
    price: 3.99,
    total_quantity: 250,
    cap: 125,
    product_stock_alert: true,
  },
  {
    product_name: 'Sausage Links',
    product_code: 'FREMEA008',
    price: 4.49,
    total_quantity: 180,
    cap: 90,
    product_stock_alert: false,
  },
  {
    product_name: 'Ribeye Steak',
    product_code: 'FREMEA009',
    price: 14.99,
    total_quantity: 70,
    cap: 35,
    product_stock_alert: true,
  },
  {
    product_name: 'Turkey Drumsticks',
    product_code: 'FREMEA010',
    price: 6.99,
    total_quantity: 120,
    cap: 60,
    product_stock_alert: false,
  },
  {
    product_name: 'Pork Ribs',
    product_code: 'FREMEA011',
    price: 7.49,
    total_quantity: 100,
    cap: 50,
    product_stock_alert: true,
  },
  {
    product_name: 'Sirloin Steak',
    product_code: 'FREMEA012',
    price: 11.99,
    total_quantity: 90,
    cap: 45,
    product_stock_alert: false,
  },
  {
    product_name: 'Ground Pork',
    product_code: 'FREMEA013',
    price: 5.99,
    total_quantity: 150,
    cap: 75,
    product_stock_alert: true,
  },
  {
    product_name: 'Chicken Wings',
    product_code: 'FREMEA014',
    price: 3.49,
    total_quantity: 300,
    cap: 150,
    product_stock_alert: false,
  },
  {
    product_name: 'Filet Mignon',
    product_code: 'FREMEA015',
    price: 19.99,
    total_quantity: 60,
    cap: 30,
    product_stock_alert: true,
  },
  {
    product_name: 'Ground Lamb',
    product_code: 'FREMEA016',
    price: 8.49,
    total_quantity: 90,
    cap: 45,
    product_stock_alert: false,
  },
  {
    product_name: 'Bison Steak',
    product_code: 'FREMEA017',
    price: 13.99,
    total_quantity: 70,
    cap: 35,
    product_stock_alert: true,
  },
  {
    product_name: 'Ham Slices',
    product_code: 'FREMEA018',
    price: 4.99,
    total_quantity: 200,
    cap: 100,
    product_stock_alert: false,
  },
  {
    product_name: 'Venison Chops',
    product_code: 'FREMEA019',
    price: 15.99,
    total_quantity: 50,
    cap: 25,
    product_stock_alert: true,
  },
  {
    product_name: 'Cornish Hens',
    product_code: 'FREMEA020',
    price: 7.99,
    total_quantity: 120,
    cap: 60,
    product_stock_alert: false,
  },
];

export const departmentData = [
  {
    department_name: 'fresh',
    department_code: 'DEP001',
    total_sub_departments: 0,
    total_products: 50,
    total_products_quantity: 300,
    stock_alert: true,
    direct_supervisor: 'john Doe',
  },
  {
    department_name: 'general merchandise',
    department_code: 'DEP002',
    total_sub_departments: 6,
    total_products: 70,
    total_products_quantity: 230,
    stock_alert: true,
    direct_supervisor: 'jane Doe',
  },
];

export const subDepartmentData = [
  {
    sub_department_name: 'meats',
    sub_department_code: 'FRE001',
    department_code: 'DEP001',
    total_products: 10,
    total_products_quantity: 70,
    stock_alert: true,
    sub_department_manager: 'wang wu',
  },
  {
    sub_department_name: 'produce',
    sub_department_code: 'FRE002',
    department_code: 'DEP001',
    total_products: 20,
    total_products_quantity: 90,
    stock_alert: true,
    sub_department_manager: 'ali',
  },
  {
    sub_department_name: 'dairy/frozen',
    sub_department_code: 'FRE003',
    department_code: 'DEP001',
    total_products: 30,
    total_products_quantity: 110,
    stock_alert: true,
    sub_department_manager: 'lee',
  },
  {
    sub_department_name: 'bakery',
    sub_department_code: 'FRE004',
    department_code: 'DEP001',
    total_products: 25,
    total_products_quantity: 100,
    stock_alert: true,
    sub_department_manager: 'petrov',
  },
  {
    sub_department_name: 'home',
    sub_department_code: 'GEN001',
    department_code: 'DEP002',
    total_products: 21,
    total_products_quantity: 43,
    stock_alert: false,
    sub_department_manager: 'joe doe',
  },
  {
    sub_department_name: 'furniture',
    sub_department_code: 'GEN002',
    department_code: 'DEP002',
    total_products: 24,
    total_products_quantity: 35,
    stock_alert: false,
    sub_department_manager: 'jay doe',
  },
  {
    sub_department_name: 'toys',
    sub_department_code: 'GEN003',
    department_code: 'DEP002',
    total_products: 56,
    total_products_quantity: 104,
    stock_alert: true,
    sub_department_manager: 'simran',
  },
  {
    sub_department_name: 'garden',
    sub_department_code: 'GEN004',
    department_code: 'DEP002',
    total_products: 34,
    total_products_quantity: 61,
    stock_alert: false,
    sub_department_manager: 'yang yu',
  },
  {
    sub_department_name: 'electronics',
    sub_department_code: 'GEN005',
    department_code: 'DEP002',
    total_products: 31,
    total_products_quantity: 123,
    stock_alert: false,
    sub_department_manager: 'andres',
  },
  {
    sub_department_name: 'sports',
    sub_department_code: 'GEN006',
    department_code: 'DEP002',
    total_products: 53,
    total_products_quantity: 142,
    stock_alert: false,
    sub_department_manager: 'singh',
  },
];
