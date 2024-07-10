import {EStatus, toast} from '@acrool/react-toaster';
import AcroolTable from '@acrool/react-table';



const Example = () => {
   
    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>

        <AcroolTable
            isDark
            isVisiblePaginate={false}
            tableCellMediaSize={768}
            gap="10px"
            title={{
                name: {text: 'Name', col: '200px'},
                use: {text: 'Use', col: true},

            }}
            data={[
                {
                    id: 1,
                    onClickRow: () => toast({message: 'Good afternoon, Imagine how are you doing today?'}),
                    field: {
                        name: 'Default',
                        use: 'toast({message: \'Good afternoon, Imagine how are you doing today?\'})',
                    }
                },
                {
                    id: 2,
                    onClickRow: () => toast({message: 'You have been logged out successfully!', status: EStatus.success}),
                    field: {
                        name: 'Args Success',
                        use: 'toast({message: \'You have been logged out successfully!\', status: EStatus.success})',
                    }
                },
                {
                    id: 3,
                    onClickRow: () => toast.success({message: 'You have been logged in successfully'}),
                    field: {
                        name: 'Success',
                        use: 'toast.success({message: \'You have been logged in successfully\'})',
                    }
                },
                {
                    id: 4,
                    onClickRow: () => toast.info({message: 'You have a new message'}),
                    field: {
                        name: 'Info',
                        use: 'toast.info({message: \'You have a new message\'})',
                    }
                },
                {
                    id: 5,
                    onClickRow: () => toast.warning({message: 'Please check if your parameter settings are correct?'}),
                    field: {
                        name: 'Warning',
                        use: 'toast.error({message: \'Please check if your parameter settings are correct?\'})',
                    }
                },
                {
                    id: 6,
                    onClickRow: () => toast.error({message: 'Sorry, the account password you entered is wrong'}),
                    field: {
                        name: 'Error',
                        use: 'toast.error({message: \'Sorry, the account password you entered is wrong\'})',
                    }
                },

            ]}

        />


    </div>;
};

export default Example;




