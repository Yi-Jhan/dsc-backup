
import { HttpInterceptorFn } from '@angular/common/http';

export const baseInterceptor: HttpInterceptorFn = ( req, next ) => {

  return next( req );

};

export const errorInterceptor: HttpInterceptorFn = ( req, next ) => {

  return next( req );

};
