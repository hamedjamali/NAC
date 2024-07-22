import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { UserEntity } from '../store/userStore';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  cursor: pointer;
`;

const Badge = styled.span<{ status: 'active' | 'not_active' | null }>`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ status }) => (status === 'active' ? 'green' : status === 'not_active' ? 'red' : 'gray')};
  color: white;
`;

interface UserListProps {
  users: UserEntity[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Status</Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => handleClick(user.id)}>
            <Td>{user.name}</Td>
            <Td>{user.userName}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
            <Td><Badge status={user.status}>{user.status}</Badge></Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
