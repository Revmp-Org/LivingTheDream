'use client';

import type React from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHeaderRow,
    TableHead,
    TableFooter,
    TableCell,
} from '@/components/atoms/table/table-primative';
import { Button } from '../button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

type DataTableProps<T> = {
    headers: string[];
    data: T[];
    renderRow: (item: T) => React.ReactNode;
    getKey: (item: T) => string | number;
    currentPage?: number;
    totalItems?: number;
    itemsPerPage?: number;
    onPageChange?: (page: number) => void;
    theme?: 'light' | 'dark';
    showFooter?: boolean;
    isLoading?: boolean;
    onRowClick?: (item: T) => void;
};

const BaseTable = <T,>({
    headers,
    data = [],
    renderRow,
    getKey,
    currentPage = 0,
    totalItems = 0,
    itemsPerPage = 10,
    onPageChange,
    theme,
    showFooter = true,
    isLoading = false,
    onRowClick,
}: DataTableProps<T>) => {
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);

    // Generate unique IDs for skeleton rows
    const skeletonRows = Array.from({ length: itemsPerPage }, () => {
        const rowId = crypto.randomUUID();
        return (
            <TableRow key={rowId} theme={theme}>
                {headers.map((header) => (
                    <TableCell key={`${rowId}-${header}`}>
                        <div
                            className={`h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse`}
                            style={{ width: header === headers[0] ? '20%' : '80%' }}
                        />
                    </TableCell>
                ))}
            </TableRow>
        );
    });

    const handleNextPage = () => {
        if (currentPage < totalPages - 1 && onPageChange) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0 && onPageChange) {
            onPageChange(currentPage - 1);
        }
    };

    const renderTableHeader = () => (
        <TableHeader>
            <TableHeaderRow>
                {headers.map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                ))}
            </TableHeaderRow>
        </TableHeader>
    );

    const renderTableFooter = (isLoadingState = false) => (
        showFooter && totalPages > 1 && (
            <TableFooter>
                <tr>
                    <td colSpan={headers.length} className={`py-4 px-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        <div className="flex justify-center items-center space-x-4">
                            <Button
                                onClick={isLoadingState ? undefined : handlePreviousPage}
                                disabled={isLoadingState || currentPage === 0}
                                variant="default"
                                icon={<ChevronLeftIcon />}
                                size="icon"
                                theme={theme}
                            />
                            <span>
                                Page {isLoadingState ? 1 : currentPage + 1} of {isLoadingState ? 1 : totalPages}
                            </span>
                            <Button
                                onClick={isLoadingState ? undefined : handleNextPage}
                                disabled={isLoadingState || currentPage === totalPages - 1}
                                variant="default"
                                icon={<ChevronRightIcon />}
                                size="icon"
                                theme={theme}
                            />
                        </div>
                    </td>
                </tr>
            </TableFooter>
        )
    );


    if (isLoading) {
        return (
            <Table>
                {renderTableHeader()}
                <TableBody>
                    {skeletonRows}
                </TableBody>
                {renderTableFooter(true)}
            </Table>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Table>
                {renderTableHeader()}
                <TableBody>
                    <TableRow theme={theme}>
                        <TableCell colSpan={headers.length} className="text-center py-8">
                            <div className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                No data available
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

    return (
        <Table>
            {renderTableHeader()}
            <TableBody>
                {data.map((item) => (
                    <TableRow
                        key={getKey(item)}
                        theme={theme}
                        onClick={() => onRowClick?.(item)}
                        className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                onRowClick?.(item);
                            }
                        }}
                    >
                        {renderRow(item)}
                    </TableRow>
                ))}
            </TableBody>
            {renderTableFooter()}
        </Table>
    );
};

export default BaseTable;