using {API_BUSINESS_PARTNER as s4} from './external/API_BUSINESS_PARTNER';
using {northwind as nw} from './external/northwind';
using {employeedata as emp} from './external/employeedata';
using {student as s} from './external/student';

service BuisnessService {

    entity A_BuisnessPartner as projection on s4.A_BusinessPartner;
    entity customers as projection on nw.Customers;
    entity products as projection on nw.Products;
    entity localData as projection on emp.Employee;
    entity studentdata as projection on s.student;

}