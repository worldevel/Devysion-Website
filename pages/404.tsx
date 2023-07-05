import { Button, Result } from 'antd';
import React from 'react';
import { useRouter } from 'next/router'

const NoFoundPage = () => {
    const router = useRouter();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => router.push('/')}>
                    Back Home
                </Button>
            }
        />
    )
};

export default NoFoundPage;