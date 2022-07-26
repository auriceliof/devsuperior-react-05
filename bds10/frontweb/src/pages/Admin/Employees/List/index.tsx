import Pagination from 'components/Pagination';
import EmployeeCard from 'components/EmployeeCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Employee } from 'types/employee';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { hasAnyRoles } from 'util/auth';
import './styles.css';

const List = () => {

  const [page, setPage] = useState<SpringPage<Employee>>();

  useEffect(() => {
    handlePageChange(0);
  }, []);

  const handlePageChange = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/employees',
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 4
      },
    };

    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      });
  };

  return (
    <>
      {hasAnyRoles (['ROLE_ADMIN']) && 
        <Link to="/admin/employees/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>      
      }

      <div className='row'>
        {page?.content.map((employee) => (
          <div key={employee.id} className="col-sm-6 col-md-12">
            <EmployeeCard employee={employee}/>
          </div>
        ))}
      </div>

      <Pagination
        forcePage={0}
        pageCount={4}
        range={3}
        onChange={handlePageChange}
      />
    </>
  );
};

export default List;
