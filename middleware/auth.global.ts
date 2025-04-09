export default defineNuxtRouteMiddleware((to, from) => {
  const publicRoutes = ['/auth/invite', '/auth/passwordresetinvite'];
  const isPublicRoute = publicRoutes.some((route) => to.path.startsWith(route));

  if (to.path === '/auth/signin' || isPublicRoute) {
    return;
  }

  if (isAuthenticated() == false) {
    return navigateTo('/auth/signin');
  }
});

function isAuthenticated() {
  return true;
}

