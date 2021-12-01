import { SkeletonTheme } from 'react-loading-skeleton';

const CustomTheme = ({children}) => {
    return (
        <SkeletonTheme baseColor='#343a40' color='#343a40' highlightColor='#3c4147' borderRadius={10}>
            {children}
        </SkeletonTheme>
    );
}

export default CustomTheme;