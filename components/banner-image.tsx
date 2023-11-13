import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalItems, onPageChange }) => (
    <div className="Container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="Container" style={{ width: '100%', height: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pagination current={currentPage} total={totalItems} defaultPageSize={10} onChange={onPageChange} />
        </div>
    </div>
);

export default PaginationComponent;
