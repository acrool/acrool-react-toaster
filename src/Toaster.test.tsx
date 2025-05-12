import '@testing-library/jest-dom';

import {act,render, screen, waitFor} from '@testing-library/react';
import React from 'react';

import Toaster, {toast} from './Toaster';

jest.useFakeTimers();

describe('Toaster', () => {
    beforeEach(() => {
        // 渲染 Toaster 元件到 document.body
        render(<Toaster />);
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    it('應該能顯示訊息', () => {
        act(() => {
            toast.success('成功訊息');
        });
        expect(screen.getByText('成功訊息')).toBeInTheDocument();
    });

    it('應該能根據狀態顯示多種訊息', () => {
        act(() => {
            toast.success('成功訊息');
            toast.error('錯誤訊息');
            toast.info('資訊訊息');
            toast.warning('警告訊息');
        });
        expect(screen.getByText('成功訊息')).toBeInTheDocument();
        expect(screen.getByText('錯誤訊息')).toBeInTheDocument();
        expect(screen.getByText('資訊訊息')).toBeInTheDocument();
        expect(screen.getByText('警告訊息')).toBeInTheDocument();
    });

    it('應該能自動隱藏訊息', async () => {
        act(() => {
            toast.success('自動消失訊息', {timeout: 1000});
        });
        expect(screen.getByText('自動消失訊息')).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        await waitFor(() => {
            expect(screen.queryByText('自動消失訊息')).not.toBeInTheDocument();
        });
    });

    it('超過限制時，最舊的訊息會被移除', () => {
        act(() => {
            for(let i=1; i<=6; i++){
                toast.success(`訊息${i}`);
            }
        });
        // 預設 limit=5，訊息1 應該被移除
        expect(screen.queryByText('訊息1')).not.toBeInTheDocument();
        for(let i=2; i<=6; i++){
            expect(screen.getByText(`訊息${i}`)).toBeInTheDocument();
        }
    });

    it('點擊訊息可手動關閉', async () => {
        act(() => {
            toast.success('可點擊關閉訊息');
        });
        const msg = screen.getByText('可點擊關閉訊息');
        act(() => {
            msg.click();
        });
        await waitFor(() => {
            expect(screen.queryByText('可點擊關閉訊息')).not.toBeInTheDocument();
        });
    });
});
