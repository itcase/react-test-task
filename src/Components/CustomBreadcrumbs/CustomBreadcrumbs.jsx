import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {ROUTES} from "../../routes/routes";

export const CustomBreadcrumbs = () => {
    const location = useLocation();

    const getCurrentPageName = () => {
        if (location.pathname === ROUTES.cart) {
            return 'Корзина';
        }
        if (location.pathname.startsWith('/details/')) {
            return 'Детальная информация';
        }
        if (location.pathname === ROUTES.main) {
            return 'Главная';
        }
        return null;
    };

    const currentPageName = getCurrentPageName();

    if (!currentPageName) {
        return null;
    }

    if (location.pathname === ROUTES.main) {
        return (
            <Breadcrumbs aria-label='breadcrumb' color='white'>
                <Typography color='white'>Главная</Typography>
            </Breadcrumbs>
        );
    }

    return (
        <Breadcrumbs aria-label='breadcrumb' color='white'>
            <Link
                component={RouterLink}
                to={ROUTES.main}
                sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                }}
            >
                Главная
            </Link>
            <Typography color='white'>
                {currentPageName}
            </Typography>
        </Breadcrumbs>
    );
};