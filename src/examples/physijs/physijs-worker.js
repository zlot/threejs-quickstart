(function () { 'use strict';

	!function(){function t(t){if(null!=t.limit.constraint_row){var i=t.rows.indexOf(t.limit.constraint_row);t.rows.splice(i,1),t.limit.constraint_row=null}}function i(t){if(null!=t.motor.constraint_row){var i=t.rows.indexOf(t.motor.constraint_row);t.rows.splice(i,1),t.motor.constraint_row=null}}var o={};o.Matrix3=function(t,i,o,e,s,n,a,r,c){this.e00=t||0,this.e01=i||0,this.e02=o||0,this.e10=e||0,this.e11=s||0,this.e12=n||0,this.e20=a||0,this.e21=r||0,this.e22=c||0},o.Matrix3.prototype={identity:function(){this.e00=1,this.e01=0,this.e02=0,this.e10=0,this.e11=1,this.e12=0,this.e20=0,this.e21=0,this.e22=1},fromMatrix4:function(t){this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22},fromQuaternion:function(t){var i=t.x+t.x,o=t.y+t.y,e=t.z+t.z,s=t.x*i,n=t.x*o,a=t.x*e,r=t.y*o,c=t.y*e,h=t.z*e,l=t.w*i,p=t.w*o,_=t.w*e;this.e00=1-(r+h),this.e10=n+_,this.e20=a-p,this.e01=n-_,this.e11=1-(s+h),this.e21=c+l,this.e02=a+p,this.e12=c-l,this.e22=1-(s+r)},transformVector3:function(t){var i=t.x,o=t.y,e=t.z;t.x=this.e00*i+this.e01*o+this.e02*e,t.y=this.e10*i+this.e11*o+this.e12*e,t.z=this.e20*i+this.e21*o+this.e22*e},transformVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z},transposeInto:function(t){t.e00=this.e00,t.e10=this.e01,t.e20=this.e02,t.e01=this.e10,t.e11=this.e11,t.e21=this.e12,t.e02=this.e20,t.e12=this.e21,t.e22=this.e22},invert:function(){var t,i=this.e00,o=this.e01,e=this.e02,s=this.e10,n=this.e11,a=this.e12,r=this.e20,c=this.e21,h=this.e22,l=h*n-a*c,p=-h*s+a*r,_=c*s-n*r,b=i*l+o*p+e*_;return b?(t=1/b,this.e00=l*t,this.e01=(-h*o+e*c)*t,this.e02=(a*o-e*n)*t,this.e10=p*t,this.e11=(h*i-e*r)*t,this.e12=(-a*i+e*s)*t,this.e20=_*t,this.e21=(-c*i+o*r)*t,this.e22=(n*i-o*s)*t,!0):!0},invertInto:function(t){var i,o=this.e00,e=this.e01,s=this.e02,n=this.e10,a=this.e11,r=this.e12,c=this.e20,h=this.e21,l=this.e22,p=l*a-r*h,_=-l*n+r*c,b=h*n-a*c,u=o*p+e*_+s*b;return u?(i=1/u,t.e00=p*i,t.e01=(-l*e+s*h)*i,t.e02=(r*e-s*a)*i,t.e10=_*i,t.e11=(l*o-s*c)*i,t.e12=(-r*o+s*n)*i,t.e20=b*i,t.e21=(-h*o+e*c)*i,t.e22=(a*o-e*n)*i,!0):!1},multiply:function(t){var i=this.e00,o=this.e01,e=this.e02,s=this.e10,n=this.e11,a=this.e12,r=this.e20,c=this.e21,h=this.e22,l=t.e00,p=t.e01,_=t.e02,b=t.e10,u=t.e11,f=t.e12,d=t.e20,m=t.e21,y=t.e22;this.e00=l*i+b*o+d*e,this.e10=l*s+b*n+d*a,this.e20=l*r+b*c+d*h,this.e01=p*i+u*o+m*e,this.e11=p*s+u*n+m*a,this.e21=p*r+u*c+m*h,this.e02=_*i+f*o+y*e,this.e12=_*s+f*n+y*a,this.e22=_*r+f*c+y*h},multiplyFrom:function(t,i){var o=t.e00,e=t.e01,s=t.e02,n=t.e10,a=t.e11,r=t.e12,c=t.e20,h=t.e21,l=t.e22,p=i.e00,_=i.e01,b=i.e02,u=i.e10,f=i.e11,d=i.e12,m=i.e20,y=i.e21,j=i.e22;this.e00=p*o+u*e+m*s,this.e10=p*n+u*a+m*r,this.e20=p*c+u*h+m*l,this.e01=_*o+f*e+y*s,this.e11=_*n+f*a+y*r,this.e21=_*c+f*h+y*l,this.e02=b*o+d*e+j*s,this.e12=b*n+d*a+j*r,this.e22=b*c+d*h+j*l}},o.Matrix4=function(){this.e00=0,this.e01=0,this.e02=0,this.e03=0,this.e10=0,this.e11=0,this.e12=0,this.e13=0,this.e20=0,this.e21=0,this.e22=0,this.e23=0,this.e30=0,this.e31=0,this.e32=0,this.e33=0},o.Matrix4.prototype={identity:function(){this.e00=1,this.e01=0,this.e02=0,this.e03=0,this.e10=0,this.e11=1,this.e12=0,this.e13=0,this.e20=0,this.e21=0,this.e22=1,this.e23=0,this.e30=0,this.e31=0,this.e32=0,this.e33=1},copy:function(t){this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.e03=t.e03,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.e13=t.e13,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22,this.e23=t.e23,this.e30=t.e30,this.e31=t.e31,this.e32=t.e32,this.e33=t.e33},makeTransform:function(t,i){var o=t.x+t.x,e=t.y+t.y,s=t.z+t.z,n=t.x*o,a=t.x*e,r=t.x*s,c=t.y*e,h=t.y*s,l=t.z*s,p=t.w*o,_=t.w*e,b=t.w*s;this.e00=1-(c+l),this.e10=a+b,this.e20=r-_,this.e30=0,this.e01=a-b,this.e11=1-(n+l),this.e21=h+p,this.e31=0,this.e02=r+_,this.e12=h-p,this.e22=1-(n+c),this.e32=0,this.e03=i.x,this.e13=i.y,this.e23=i.z,this.e33=1},transformVector3:function(t){var i=t.x,o=t.y,e=t.z;t.x=this.e00*i+this.e01*o+this.e02*e+this.e03,t.y=this.e10*i+this.e11*o+this.e12*e+this.e13,t.z=this.e20*i+this.e21*o+this.e22*e+this.e23},transformVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z+this.e03,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z+this.e13,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z+this.e23},rotateVector3:function(t){var i=t.x,o=t.y,e=t.z;t.x=this.e00*i+this.e01*o+this.e02*e,t.y=this.e10*i+this.e11*o+this.e12*e,t.z=this.e20*i+this.e21*o+this.e22*e},rotateVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z},invert:function(){var t,i=this.e00,o=this.e01,e=this.e02,s=this.e03,n=this.e10,a=this.e11,r=this.e12,c=this.e13,h=this.e20,l=this.e21,p=this.e22,_=this.e23,b=this.e30,u=this.e31,f=this.e32,d=this.e33,m=i*a-o*n,y=i*r-e*n,j=i*c-s*n,w=o*r-e*a,x=o*c-s*a,v=e*c-s*r,g=h*u-l*b,V=h*f-p*b,z=h*d-_*b,B=l*f-p*u,C=l*d-_*u,S=p*d-_*f,P=m*S-y*C+j*B+w*z-x*V+v*g;return P?(t=1/P,this.e00=(a*S-r*C+c*B)*t,this.e01=(-o*S+e*C-s*B)*t,this.e02=(u*v-f*x+d*w)*t,this.e03=(-l*v+p*x-_*w)*t,this.e10=(-n*S+r*z-c*V)*t,this.e11=(i*S-e*z+s*V)*t,this.e12=(-b*v+f*j-d*y)*t,this.e13=(h*v-p*j+_*y)*t,this.e20=(n*C-a*z+c*g)*t,this.e21=(-i*C+o*z-s*g)*t,this.e22=(b*x-u*j+d*m)*t,this.e23=(-h*x+l*j-_*m)*t,this.e30=(-n*B+a*V-r*g)*t,this.e31=(i*B-o*V+e*g)*t,this.e32=(-b*w+u*y-f*m)*t,this.e33=(h*w-l*y+p*m)*t,!0):!1},invertInto:function(t){var i,o=this.e00,e=this.e10,s=this.e20,n=this.e30,a=this.e01,r=this.e11,c=this.e21,h=this.e31,l=this.e02,p=this.e12,_=this.e22,b=this.e32,u=this.e03,f=this.e13,d=this.e23,m=this.e33,y=o*r-e*a,j=o*c-s*a,w=o*h-n*a,x=e*c-s*r,v=e*h-n*r,g=s*h-n*c,V=l*f-p*u,z=l*d-_*u,B=l*m-b*u,C=p*d-_*f,S=p*m-b*f,P=_*m-b*d,M=y*P-j*S+w*C+x*B-v*z+g*V;return M?(i=1/M,t.e00=(r*P-c*S+h*C)*i,t.e10=(-e*P+s*S-n*C)*i,t.e20=(f*g-d*v+m*x)*i,t.e30=(-p*g+_*v-b*x)*i,t.e01=(-a*P+c*B-h*z)*i,t.e11=(o*P-s*B+n*z)*i,t.e21=(-u*g+d*w-m*j)*i,t.e31=(l*g-_*w+b*j)*i,t.e02=(a*S-r*B+h*V)*i,t.e12=(-o*S+e*B-n*V)*i,t.e22=(u*v-f*w+m*y)*i,t.e32=(-l*v+p*w-b*y)*i,t.e03=(-a*C+r*z-c*V)*i,t.e13=(o*C-e*z+s*V)*i,t.e23=(-u*x+f*j-d*y)*i,void(t.e33=(l*x-p*j+_*y)*i)):!1},multiply:function(t){var i=this.e00,o=this.e10,e=this.e20,s=this.e30,n=this.e01,a=this.e11,r=this.e21,c=this.e31,h=this.e02,l=this.e12,p=this.e22,_=this.e32,b=this.e03,u=this.e13,f=this.e23,d=this.e33,m=t.e00,y=t.e10,j=t.e20,w=t.e30;this.e00=m*i+y*n+j*h+w*b,this.e10=m*o+y*a+j*l+w*u,this.e20=m*e+y*r+j*p+w*f,this.e30=m*s+y*c+j*_+w*d,m=t.e01,y=t.e11,j=t.e21,w=t.e31,this.e01=m*i+y*n+j*h+w*b,this.e11=m*o+y*a+j*l+w*u,this.e21=m*e+y*r+j*p+w*f,this.e31=m*s+y*c+j*_+w*d,m=t.e02,y=t.e12,j=t.e22,w=t.e32,this.e02=m*i+y*n+j*h+w*b,this.e12=m*o+y*a+j*l+w*u,this.e22=m*e+y*r+j*p+w*f,this.e32=m*s+y*c+j*_+w*d,m=t.e03,y=t.e13,j=t.e23,w=t.e33,this.e03=m*i+y*n+j*h+w*b,this.e13=m*o+y*a+j*l+w*u,this.e23=m*e+y*r+j*p+w*f,this.e33=m*s+y*c+j*_+w*d}},o.Quaternion=function(t,i,o,e){this.x=null!=t?t:0,this.y=null!=i?i:0,this.z=null!=o?o:0,this.w=null!=e?e:1,this.normalize()},o.Quaternion.prototype={set:function(t,i,o,e){this.x=t,this.y=i,this.z=o,this.w=e},multiply:function(t){var i=this.x,o=this.y,e=this.z,s=this.w,n=t.x,a=t.y,r=t.z,c=t.w;this.x=i*c+s*n+o*r-e*a,this.y=o*c+s*a+e*n-i*r,this.z=e*c+s*r+i*a-o*n,this.w=s*c-i*n-o*a-e*r},multiplyQuaternions:function(t,i){this.x=t.x*i.w+t.w*i.x+t.y*i.z-t.z*i.y,this.y=t.y*i.w+t.w*i.y+t.z*i.x-t.x*i.z,this.z=t.z*i.w+t.w*i.z+t.x*i.y-t.y*i.x,this.w=t.w*i.w-t.x*i.x-t.y*i.y-t.z*i.z},normalize:function(){var t=this.x,i=this.y,o=this.z,e=this.w,s=Math.sqrt(t*t+i*i+o*o+e*e);0===s?this.x=this.y=this.z=this.w=0:(s=1/s,this.x*=s,this.y*=s,this.z*=s,this.w*=s)},invertQuaternion:function(t){var i=t.x,o=t.y,e=t.z,s=t.w,n=i*i+o*o+e*e+s*s;if(0===n)this.x=this.y=this.z=this.w=0;else{var a=-1/n;this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=t.w*-a}},transformVector3:function(t){var i=t.x,o=t.y,e=t.z,s=this.x,n=this.y,a=this.z,r=this.w,c=r*i+n*e-a*o,h=r*o+a*i-s*e,l=r*e+s*o-n*i,p=-s*i-n*o-a*e;t.x=c*r+p*-s+h*-a-l*-n,t.y=h*r+p*-n+l*-s-c*-a,t.z=l*r+p*-a+c*-n-h*-s},transformVector3Into:function(t,i){var o=t.x,e=t.y,s=t.z,n=this.x,a=this.y,r=this.z,c=this.w,h=c*o+a*s-r*e,l=c*e+r*o-n*s,p=c*s+n*e-a*o,_=-n*o-a*e-r*s;i.x=h*c+_*-n+l*-r-p*-a,i.y=l*c+_*-a+p*-n-h*-r,i.z=p*c+_*-r+h*-a-l*-n},angleBetween:function(t){return 2*Math.acos(this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w)},signedAngleBetween:function(t,i){return Math.abs(a.dot(i))<.5?e.set(1,0,0):e.set(0,0,1),this.transformVector3Into(e,s),t.transformVector3Into(e,n),e.crossVectors(s,n),Math.atan2(i.dot(e),s.dot(n))}},o.Vector3=function(t,i,o){this.x=t||0,this.y=i||0,this.z=o||0},o.Vector3.prototype={set:function(t,i,o){this.x=t,this.y=i,this.z=o},copy:function(t){this.x=t.x,this.y=t.y,this.z=t.z},add:function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z},addVectors:function(t,i){this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z},subtract:function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z},subtractVectors:function(t,i){this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z},multiply:function(t){this.x*=t.x,this.y*=t.y,this.z*=t.z},multiplyVectors:function(t,i){this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z},scale:function(t){this.x*=t,this.y*=t,this.z*=t},scaleVector:function(t,i){this.x=t.x*i,this.y=t.y*i,this.z=t.z*i},lengthSquared:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){var t=this.length();0===t?this.x=this.y=this.z=0:this.scale(1/t)},normalizeVector:function(t){this.copy(t),this.normalize()},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var i=this.x,o=this.y,e=this.z;this.x=o*t.z-e*t.y,this.y=e*t.x-i*t.z,this.z=i*t.y-o*t.x},crossVectors:function(t,i){this.x=t.y*i.z-t.z*i.y,this.y=t.z*i.x-t.x*i.z,this.z=t.x*i.y-t.y*i.x},distanceTo:function(t){var i=t.x-this.x,o=t.y-this.y,e=t.z-this.z;return Math.sqrt(i*i+o*o+e*e)},findOrthogonal:function(t,i){var o,e;Math.abs(this.z)>.7071067811865476?(o=-this.y*this.y+this.z*this.z,e=1/Math.sqrt(o),t.set(0,-this.z*e,this.y*e),i.set(o*e,-this.x*t.z,this.x*t.y)):(o=this.x*this.x+this.y*this.y,e=1/Math.sqrt(o),t.set(-this.y*e,this.x*e,0),i.set(-this.z*t.y,this.z*t.x,o*e))}},o.EPSILON=1e-5;var e=new o.Vector3,s=new o.Vector3,n=new o.Vector3,a=new o.Vector3(1,0,0),r=(new o.Vector3(0,1,0),new o.Vector3(0,0,1),new o.Quaternion),c=new o.Quaternion,h=new o.Matrix3,l=new o.Matrix3;o.EventEmitter=function(){},o.EventEmitter.prototype={addListener:function(t,i){null==this.listeners[t]&&(this.listeners[t]=[]),-1===this.listeners[t].indexOf(i)&&this.listeners[t].push(i)},removeListener:function(t,i){null==this.listeners[t]&&(this.listeners[t]=[]);var o=this.listeners[t].indexOf(i);-1!==o&&this.listeners[t].splice(o,1)},removeAllListeners:function(){for(var t=Object.keys(this.listeners),i=0;i<t.length;i++)this.listeners[t[i]].length=0},emit:function(t){var i,o=Array.prototype.slice.call(arguments,1);if(this.listeners[t]instanceof Array)for(var e=this.listeners[t].slice(),s=0;s<e.length;s++)if(i=e[s].apply(this,o),i===!1)return!1}},o.EventEmitter.apply=function(t){t.prototype.addListener=o.EventEmitter.prototype.addListener,t.prototype.removeListener=o.EventEmitter.prototype.removeListener,t.prototype.removeAllListeners=o.EventEmitter.prototype.removeAllListeners,t.prototype.emit=o.EventEmitter.prototype.emit},o.RigidBody=function(){var t=0;return function(i,e){this.id=t++,this.shape=i,this.aabb=new o.AABB,this._mass=e||1/0,this._mass_inverted=1/e,this.position=new o.Vector3,this.rotation=new o.Quaternion(0,0,0,1),this.linear_velocity=new o.Vector3,this.angular_velocity=new o.Vector3,this.transform=new o.Matrix4,this.transform.identity(),this.transform_inverse=new o.Matrix4,this.transform_inverse.identity(),this.inertiaTensor=i.getInertiaTensor(e),this.inverseInertiaTensor=new o.Matrix3,this.inertiaTensor.invertInto(this.inverseInertiaTensor),this.inertiaTensorWorldFrame=new o.Matrix3,this.inverseInertiaTensorWorldFrame=new o.Matrix3,this.acceleration=new o.Vector3,this.restitution=.1,this.friction=.5,this.collision_groups=0,this.collision_mask=0,this.gravity=null,this.linear_damping=0,this.angular_damping=0,this.linear_factor=new o.Vector3(1,1,1),this.angular_factor=new o.Vector3(1,1,1),this.world=null,this.accumulated_force=new o.Vector3,this.accumulated_torque=new o.Vector3,this.push_velocity=new o.Vector3,this.turn_velocity=new o.Vector3,this.solver_impulse=new Float64Array(6),this.updateDerived(),this.listeners={}}}(),o.EventEmitter.apply(o.RigidBody),Object.defineProperty(o.RigidBody.prototype,"mass",{get:function(){return this._mass},set:function(t){this._mass=t,this._mass_inverted=1/t,this.inertiaTensor=this.shape.getInertiaTensor(t)}}),o.RigidBody.prototype.findSupportPoint=function(){var t=new o.Vector3;return function(i,o){this.transform_inverse.rotateVector3Into(i,t),this.shape.findSupportPoint(t,o),this.transform.transformVector3(o)}}(),o.RigidBody.prototype.rayIntersect=function(){var t=new o.Vector3,i=new o.Vector3;return function(o,e,s){this.transform_inverse.transformVector3Into(o,t),this.transform_inverse.transformVector3Into(e,i);var n=this.shape.rayIntersect(t,i);null!=n&&(n.object=this,this.transform.transformVector3(n.point),this.transform.rotateVector3(n.normal),s.push(n))}}(),o.RigidBody.prototype.integrate=function(t){if(this._mass!==1/0){e.scaleVector(this.accumulated_force,this._mass_inverted),e.multiply(this.linear_factor),this.linear_velocity.add(e),this.inverseInertiaTensorWorldFrame.transformVector3Into(this.accumulated_torque,e),e.multiply(this.angular_factor),this.angular_velocity.add(e),this.linear_velocity.scale(Math.pow(1-this.linear_damping,t)),this.angular_velocity.scale(Math.pow(1-this.angular_damping,t)),e.scaleVector(this.linear_velocity,t),this.position.add(e),r.x=this.angular_velocity.x*t,r.y=this.angular_velocity.y*t,r.z=this.angular_velocity.z*t,r.w=0,r.multiply(this.rotation);var i=.5;this.rotation.x+=i*r.x,this.rotation.y+=i*r.y,this.rotation.z+=i*r.z,this.rotation.w+=i*r.w,this.rotation.normalize(),this.accumulated_force.x=this.accumulated_force.y=this.accumulated_force.z=0,this.accumulated_torque.x=this.accumulated_torque.y=this.accumulated_torque.z=0,this.solver_impulse[0]=this.solver_impulse[1]=this.solver_impulse[2]=this.solver_impulse[3]=this.solver_impulse[4]=this.solver_impulse[5]=0,this.push_velocity.x=this.push_velocity.y=this.push_velocity.z=0,this.turn_velocity.x=this.turn_velocity.y=this.turn_velocity.z=0}},o.RigidBody.prototype.setGravity=function(t,i,e){this.gravity?(this.gravity.x=t,this.gravity.y=i,this.gravity.z=e):this.gravity=new o.Vector3(t,i,e)},o.RigidBody.prototype.applyImpulse=function(t){e.multiplyVectors(t,this.linear_factor),this.linear_velocity.add(e)},o.RigidBody.prototype.applyForce=function(t){this.accumulated_force.add(t)},o.RigidBody.prototype.applyForceAtWorldPoint=function(t,i){e.copy(i),e.subtract(this.position),e.cross(t),this.accumulated_force.add(t),this.accumulated_torque.add(e)},o.RigidBody.prototype.applyForceAtLocalPoint=function(t,i){this.transform.transformVector3Into(i,e),this.applyForceAtWorldPoint(t,e)},o.RigidBody.prototype.getVelocityInLocalPoint=function(t,i){this._mass===1/0?i.set(0,0,0):(i.copy(this.angular_velocity),i.cross(t),i.add(this.linear_velocity))},o.RigidBody.prototype.updateDerived=function(){this.rotation.normalize(),this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this._mass!==1/0&&(h.fromMatrix4(this.transform_inverse),h.transposeInto(l),l.multiply(this.inertiaTensor),this.inertiaTensorWorldFrame.multiplyFrom(l,h),this.inertiaTensorWorldFrame.invertInto(this.inverseInertiaTensorWorldFrame)),this.aabb.transform(this.shape.aabb,this.transform)},o.ForceGenerator=function(t){this.force=t||new o.Vector3,this.enabled=!0,this.affected=[]},o.ForceGenerator.prototype.applyForce=function(){if(this.enabled){var t,i;for(t=0,i=this.affected.length;i>t;t++)this.affected[t].applyForce(this.force)}},o.ForceGenerator.prototype.enable=function(){this.enabled=!0},o.ForceGenerator.prototype.disable=function(){this.enabled=!1},o.ForceGenerator.prototype.affect=function(t){var i,o;for(i=0,o=this.affected.length;o>i;i++)if(this.affected[i]===t)return;this.affected.push(t)},o.ForceGenerator.prototype.unaffect=function(t){var i,o;for(i=0,o=this.affected.length;o>i;i++)if(this.affected[i]===t)return void this.affected.splice(i,1)},o.BasicBroadphase=function(){this.bodies=[],this.collision_pairs=[]},o.BasicBroadphase.prototype.addBody=function(t){this.bodies.push(t)},o.BasicBroadphase.prototype.removeBody=function(t){var i,o=this.bodies.length;for(i=0;o>i;i++)if(this.bodies[i]===t){this.bodies.splice(i,1);break}},o.BasicBroadphase.prototype.update=function(){var t,i,e,s,n=this.bodies.length;for(this.collision_pairs.length=0,t=0;n>t;t++)for(e=this.bodies[t],i=0;n>i;i++)i>=t||(s=this.bodies[i],o.CollisionUtils.canBodiesCollide(e,s)&&e.aabb.intersects(s.aabb)&&this.collision_pairs.push([s,e]))},o.BasicBroadphase.prototype.intersectsWith=function(t){var i,o,e=this.bodies.length,s=[];for(i=0;e>i;i++)o=this.bodies[i],t!==o&&t.aabb.intersects(o.aabb)&&s.push(o);return s},o.BasicBroadphase.prototype.rayIntersect=function(t,i){var o,e,s=this.bodies.length,n=[];for(o=0;s>o;o++)e=this.bodies[o],e.aabb.testRayIntersect(t,i)&&e.rayIntersect(t,i,n);return n},function(){var t=function(t,i,o){this.type=t,this.body=i,this.position=o,this.prev=null,this.next=null};t.TYPES={START:0,END:1};var i=function(){this.first=null,this.last=null};o.SAPBroadphase=function(){this.markers_x=new i,this.markers_y=new i,this.markers_z=new i,this.overlap_counter={},this.collision_pairs=[],this.pending_bodies=[]},o.SAPBroadphase.prototype={incrementOverlaps:function(t,i){if(o.CollisionUtils.canBodiesCollide(t,i)){var e=t.id<i.id?t.id+"-"+i.id:i.id+"-"+t.id;this.overlap_counter.hasOwnProperty(e)||(this.overlap_counter[e]=0),this.overlap_counter[e]++,3===this.overlap_counter[e]&&this.collision_pairs.push([t.id<i.id?t:i,t.id<i.id?i:t])}},decrementOverlaps:function(t,i){var o=t.id<i.id?t.id+"-"+i.id:i.id+"-"+t.id;this.overlap_counter.hasOwnProperty(o)||(this.overlap_counter[o]=0),this.overlap_counter[o]--,0===this.overlap_counter[o]?delete this.overlap_counter[o]:2===this.overlap_counter[o]&&(this.collision_pairs=this.collision_pairs.filter(function(o){return o[0]===t&&o[1]===i?!1:o[0]===i&&o[1]===t?!1:!0}))},addBody:function(t){this.pending_bodies.push(t)},removeBody:function(t){var i=this.pending_bodies.indexOf(t);if(-1!==i)return void this.pending_bodies.splice(i,1);for(var o,e,s=this.markers_x.first;s;)s.body===t&&(o=s.next,e=s.prev,null!=o?(o.prev=e,null!=e&&(e.next=o)):this.markers_x.last=e,null!=e?(e.next=o,null!=o&&(o.prev=e)):this.markers_x.first=o),s=s.next;for(s=this.markers_y.first;s;)s.body===t&&(o=s.next,e=s.prev,null!=o?(o.prev=e,null!=e&&(e.next=o)):this.markers_y.last=e,null!=e?(e.next=o,null!=o&&(o.prev=e)):this.markers_y.first=o),s=s.next;for(s=this.markers_z.first;s;)s.body===t&&(o=s.next,e=s.prev,null!=o?(o.prev=e,null!=e&&(e.next=o)):this.markers_z.last=e,null!=e?(e.next=o,null!=o&&(o.prev=e)):this.markers_z.first=o),s=s.next;this.collision_pairs=this.collision_pairs.filter(function(i){return i[0]===t||i[1]===t?!1:!0})},insertPending:function(){for(var i;i=this.pending_bodies.pop();){i.updateDerived();var o=new t(t.TYPES.START,i,i.aabb.min.x),e=new t(t.TYPES.START,i,i.aabb.min.y),s=new t(t.TYPES.START,i,i.aabb.min.z),n=new t(t.TYPES.END,i,i.aabb.max.x),a=new t(t.TYPES.END,i,i.aabb.max.y),r=new t(t.TYPES.END,i,i.aabb.max.z);this.insert(this.markers_x,o),this.insert(this.markers_x,n),this.insert(this.markers_y,e),this.insert(this.markers_y,a),this.insert(this.markers_z,s),this.insert(this.markers_z,r)}},insert:function(t,i){null==t.first?t.first=t.last=i:(i.prev=t.last,t.last.next=i,t.last=i,this.sort(t,i))},sort:function(i,o){for(var e;null!=o.prev&&(o.position<o.prev.position||o.position===o.prev.position&&o.type===t.TYPES.START&&o.prev.type===t.TYPES.END);)e=o.prev,o.type!==e.type&&(o.type===t.TYPES.START?this.incrementOverlaps(o.body,e.body):this.decrementOverlaps(o.body,e.body)),o.prev=e.prev,e.next=o.next,o.next=e,e.prev=o,null==o.prev?i.first=o:o.prev.next=o,null==e.next?i.last=e:e.next.prev=e},update:function(){this.insertPending();for(var i=this.markers_x.first;i;)i.position=i.type===t.TYPES.START?i.body.aabb.min.x:i.body.aabb.max.x,this.sort(this.markers_x,i),i=i.next;for(i=this.markers_y.first;i;)i.position=i.type===t.TYPES.START?i.body.aabb.min.y:i.body.aabb.max.y,this.sort(this.markers_y,i),i=i.next;for(i=this.markers_z.first;i;)i.position=i.type===t.TYPES.START?i.body.aabb.min.z:i.body.aabb.max.z,this.sort(this.markers_z,i),i=i.next},intersectsWith:function(t){this.addBody(t),this.update();var i=this.collision_pairs.filter(function(i){return i[0]===t||i[1]===t?!0:!1}).map(function(i){return i[0]===t?i[1]:i[0]});return this.removeBody(t),i},rayIntersect:function(i,o){this.pending_bodies.length>0&&this.update();var e,s,n,a,r,c,h,l,p={},_=[],b={},u={};for(n=this.markers_x.first,a=!1,p={},e=i.x<o.x?i.x:o.x,s=i.x<o.x?o.x:i.x;n;){if(n.type===t.TYPES.START&&(p[n.body.id]=n.body),n.position>=e)if(a===!1)for(a=!0,l=Object.keys(p),r=0;r<l.length;r++)h=l[r],c=p[h],null!=c&&(b[c.id]=c,u[c.id]=u[c.id]?u[c.id]+1:1);else n.type===t.TYPES.START&&(b[n.body.id]=n.body,u[n.body.id]=u[n.body.id]?u[n.body.id]+1:1);if(n.type===t.TYPES.END&&(p[n.body.id]=null),n.position>s)break;n=n.next}for(l=Object.keys(u),r=0;r<l.length;r++){var f=l[r];1===u[f]&&b[f].aabb.testRayIntersect(i,o)&&b[f].rayIntersect(i,o,_)}return _}}}(),o.BoxSphere=function(t,i){var a,r,c=t.shape instanceof o.SphereShape?t:i,h=t.shape instanceof o.SphereShape?i:t;return h.transform_inverse.transformVector3Into(c.position,e),Math.abs(e.x)-c.shape.radius>h.shape.half_width||Math.abs(e.y)-c.shape.radius>h.shape.half_height||Math.abs(e.z)-c.shape.radius>h.shape.half_depth||(s.x=s.y=s.z=0,r=e.x,r>h.shape.half_width?r=h.shape.half_width:r<-h.shape.half_width&&(r=-h.shape.half_width),s.x=r,r=e.y,r>h.shape.half_height?r=h.shape.half_height:r<-h.shape.half_height&&(r=-h.shape.half_height),s.y=r,r=e.z,r>h.shape.half_depth?r=h.shape.half_depth:r<-h.shape.half_depth&&(r=-h.shape.half_depth),s.z=r,n.subtractVectors(s,e),r=n.lengthSquared(),r>c.shape.radius*c.shape.radius)?void 0:(a=o.ObjectPool.getObject("ContactDetails"),a.object_a=c,a.object_b=h,0===r?o.BoxSphere.spherePenetration(h.shape,e,s,a):(a.contact_normal.subtractVectors(s,e),a.penetration_depth=-a.contact_normal.length(),a.contact_normal.scale(-1/a.penetration_depth),a.contact_point_in_b.copy(s)),a.penetration_depth+=c.shape.radius,h.transform.rotateVector3(a.contact_normal),c.transform_inverse.rotateVector3Into(a.contact_normal,a.contact_point_in_a),a.contact_point_in_a.scale(c.shape.radius),a.contact_point.scaleVector(a.contact_normal,c.shape.radius-a.penetration_depth/2),a.contact_point.add(c.position),a.restitution=(c.restitution+h.restitution)/2,a.friction=(c.friction+h.friction)/2,a)},o.BoxSphere.spherePenetration=function(t,i,o,e){var n,a;i.x<0?(n=t.half_width+i.x,o.x=-t.half_width,o.y=o.z=0,e.penetration_depth=n):(n=t.half_width-i.x,o.x=t.half_width,o.y=o.z=0,e.penetration_depth=n),i.y<0?(a=t.half_height+i.y,n>a&&(n=a,o.y=-t.half_height,o.x=o.z=0,e.penetration_depth=n)):(a=t.half_height-i.y,n>a&&(n=a,o.y=t.half_height,o.x=o.z=0,e.penetration_depth=n)),i.z<0?(a=t.half_depth+i.z,n>a&&(o.z=-t.half_depth,o.x=o.y=0,e.penetration_depth=n)):(a=t.half_depth-i.z,n>a&&(o.z=t.half_depth,o.x=o.y=0,e.penetration_depth=n)),e.contact_point_in_b.copy(s),e.contact_normal.scaleVector(e.contact_point_in_b,-1),e.contact_normal.normalize()},o.GjkEpa={margins:.01,result:null,max_iterations:20,epa_condition:.001,SupportPoint:function(t,i,o){this.witness_a=t,this.witness_b=i,this.point=o},findSupportPoint:function(){var t=new o.Vector3;return function(i,o,e,s){i.findSupportPoint(e,s.witness_a),t.scaleVector(e,-1),o.findSupportPoint(t,s.witness_b),s.point.subtractVectors(s.witness_a,s.witness_b)}}(),testCollision:function(t,i){var e=o.GjkEpa.GJK(t,i);return null!=o.GjkEpa.result?o.GjkEpa.result:null!=e?o.GjkEpa.EPA(e):void 0},GJK:function(){return function(t,i){var e,s=new o.GjkEpa.Simplex(t,i);for(o.GjkEpa.result=null;e=s.addPoint(););return e===!1?(o.GjkEpa.freeSimplex(s),null):s}}(),freeSimplex:function(t){for(var i=0,e=t.points.length;e>i;i++)o.ObjectPool.freeObject("GJK2SupportPoint",t.points[i])},freePolyhedron:function(t){for(var i=o.ObjectPool.pools.GJK2SupportPoint,e=0,s=t.faces.length;s>e;e++)-1===i.indexOf(t.faces[e].a)&&o.ObjectPool.freeObject("GJK2SupportPoint",t.faces[e].a),-1===i.indexOf(t.faces[e].b)&&o.ObjectPool.freeObject("GJK2SupportPoint",t.faces[e].b),-1===i.indexOf(t.faces[e].c)&&o.ObjectPool.freeObject("GJK2SupportPoint",t.faces[e].c)},EPA:function(){var t=new o.Vector3,i={a:new o.Vector3,b:new o.Vector3,c:new o.Vector3};return function(s){for(var n=new o.GjkEpa.Polyhedron(s),a=0;++a;){n.findFaceClosestToOrigin(),e.copy(n.closest_face_distance<o.EPSILON?n.faces[n.closest_face].normal:n.closest_point);var r=o.ObjectPool.getObject("GJK2SupportPoint");o.GjkEpa.findSupportPoint(s.object_a,s.object_b,e,r),e.subtractVectors(r.point,n.closest_point);var c=e.lengthSquared();if(a===o.GjkEpa.max_iterations||c<o.GjkEpa.epa_condition&&n.closest_face_distance>o.EPSILON){var h=o.ObjectPool.getObject("ContactDetails");return h.object_a=s.object_a,h.object_b=s.object_b,h.contact_normal.normalizeVector(n.closest_point),0===h.contact_normal.lengthSquared()&&h.contact_normal.subtractVectors(h.object_b.position,h.object_a.position),h.contact_normal.normalize(),o.GeometryMethods.findBarycentricCoordinates(n.closest_point,n.faces[n.closest_face].a.point,n.faces[n.closest_face].b.point,n.faces[n.closest_face].c.point,t),isNaN(t.x)?(o.GjkEpa.freePolyhedron(n),null):(i.a.scaleVector(n.faces[n.closest_face].a.witness_a,t.x),i.b.scaleVector(n.faces[n.closest_face].b.witness_a,t.y),i.c.scaleVector(n.faces[n.closest_face].c.witness_a,t.z),h.contact_point_in_a.addVectors(i.a,i.b),h.contact_point_in_a.add(i.c),i.a.scaleVector(n.faces[n.closest_face].a.witness_b,t.x),i.b.scaleVector(n.faces[n.closest_face].b.witness_b,t.y),i.c.scaleVector(n.faces[n.closest_face].c.witness_b,t.z),h.contact_point_in_b.addVectors(i.a,i.b),h.contact_point_in_b.add(i.c),h.contact_point.addVectors(h.contact_point_in_a,h.contact_point_in_b),h.contact_point.scale(.5),h.object_a.transform_inverse.transformVector3(h.contact_point_in_a),h.object_b.transform_inverse.transformVector3(h.contact_point_in_b),h.penetration_depth=n.closest_point.length()+o.GjkEpa.margins,h.restitution=(s.object_a.restitution+s.object_b.restitution)/2,h.friction=(s.object_a.friction+s.object_b.friction)/2,o.GjkEpa.freePolyhedron(n),h)}n.addVertex(r)}return o.GjkEpa.freePolyhedron(n),null}}(),Face:function(t,i,n,a){this.active=!0,this.a=i,this.b=n,this.c=a,this.normal=new o.Vector3,this.neighbors=[],e.subtractVectors(n.point,i.point),s.subtractVectors(a.point,i.point),this.normal.crossVectors(e,s),this.normal.normalize()}},o.GjkEpa.Polyhedron=function(t){this.closest_face=null,this.closest_face_distance=null,this.closest_point=new o.Vector3,this.faces=[new o.GjkEpa.Face(this,t.points[2],t.points[1],t.points[0]),new o.GjkEpa.Face(this,t.points[3],t.points[1],t.points[2]),new o.GjkEpa.Face(this,t.points[1],t.points[3],t.points[0]),new o.GjkEpa.Face(this,t.points[0],t.points[3],t.points[2])],this.faces[0].neighbors.push(this.faces[1],this.faces[2],this.faces[3]),this.faces[1].neighbors.push(this.faces[2],this.faces[0],this.faces[3]),this.faces[2].neighbors.push(this.faces[1],this.faces[3],this.faces[0]),this.faces[3].neighbors.push(this.faces[2],this.faces[1],this.faces[0])},o.GjkEpa.Polyhedron.prototype={addVertex:function(t){var i,e,s,n,a,r=[],c=[];for(this.faces[this.closest_face].silhouette(t,r),i=0;i<r.length-5;i+=5){if(s=r[i+3],n=r[i+4],0!==i&&a!==s)for(e=i+5;e<r.length;e+=5)if(r[e+3]===a){var h=r.slice(i,i+5);r[i]=r[e],r[i+1]=r[e+1],r[i+2]=r[e+2],r[i+3]=r[e+3],r[i+4]=r[e+4],r[e]=h[0],r[e+1]=h[1],r[e+2]=h[2],r[e+3]=h[3],r[e+4]=h[4],s=r[i+3],n=r[i+4];break}a=n}for(i=0;i<r.length;i+=5){var l=r[i];s=r[i+3],n=r[i+4];var p=new o.GjkEpa.Face(this,n,t,s);p.neighbors[2]=r[i],c.push(p),l.neighbors[l.neighbors.indexOf(r[i+2])]=p}for(i=0;i<c.length;i++)c[i].neighbors[0]=c[i+1===c.length?0:i+1],c[i].neighbors[1]=c[0>i-1?c.length-1:i-1];return Array.prototype.push.apply(this.faces,c),r},findFaceClosestToOrigin:function(){var t=new o.Vector3,i=new o.Vector3;return function(){this.closest_face_distance=1/0;var e,s;for(s=0;s<this.faces.length;s++)this.faces[s].active!==!1&&(o.GeometryMethods.findClosestPointInTriangle(t,this.faces[s].a.point,this.faces[s].b.point,this.faces[s].c.point,i),e=i.lengthSquared(),e<this.closest_face_distance&&(this.closest_face_distance=e,this.closest_face=s,this.closest_point.copy(i)))}}()},o.GjkEpa.Face.prototype={classifyVertex:function(t){var i=this.normal.dot(this.a.point);return this.normal.dot(t.point)-i},silhouette:function(t,i,o){if(this.active!==!1)if(this.classifyVertex(t)>0)this.active=!1,this.neighbors[0].silhouette(t,i,this),this.neighbors[1].silhouette(t,i,this),this.neighbors[2].silhouette(t,i,this);else if(o){var e,s,n=this.neighbors.indexOf(o);0===n?(e=this.a,s=this.b):1===n?(e=this.b,s=this.c):(e=this.c,s=this.a),i.push(this,n,o,s,e)}}},function(){var t=new o.Vector3,i=new o.Vector3,a=new o.Vector3,r=new o.Vector3,c=new o.Vector3,h=new o.Vector3,l={a:new o.Vector3,b:new o.Vector3,c:new o.Vector3};o.GjkEpa.Simplex=function(t,i){this.object_a=t,this.object_b=i,this.points=[],this.iterations=0,this.next_direction=new o.Vector3,this.updateDirection()},o.GjkEpa.Simplex.prototype={addPoint:function(){if(++this.iterations===o.GjkEpa.max_iterations)return!1;var i=o.ObjectPool.getObject("GJK2SupportPoint");if(o.GjkEpa.findSupportPoint(this.object_a,this.object_b,this.next_direction,i),this.points.push(i),i.point.dot(this.next_direction)<0&&this.points.length>1){if(this.points.length>=3){o.GeometryMethods.findClosestPointInTriangle(t,this.points[0].point,this.points[1].point,this.points[2].point,e);var s=e.lengthSquared();if(s<=o.GjkEpa.margins*o.GjkEpa.margins){var n=o.ObjectPool.getObject("ContactDetails");return n.object_a=this.object_a,n.object_b=this.object_b,n.contact_normal.normalizeVector(e),0===n.contact_normal.lengthSquared()&&n.contact_normal.subtractVectors(n.object_b.position,n.object_a.position),n.contact_normal.normalize(),n.contact_normal.scale(-1),n.penetration_depth=o.GjkEpa.margins-Math.sqrt(s),o.GeometryMethods.findBarycentricCoordinates(e,this.points[0].point,this.points[1].point,this.points[2].point,h),isNaN(h.x)?!1:(l.a.scaleVector(this.points[0].witness_a,h.x),l.b.scaleVector(this.points[1].witness_a,h.y),l.c.scaleVector(this.points[2].witness_a,h.z),n.contact_point_in_a.addVectors(l.a,l.b),n.contact_point_in_a.add(l.c),n.contact_point_in_b.scaleVector(n.contact_normal,-n.penetration_depth),n.contact_point_in_b.add(n.contact_point_in_a),n.contact_point.addVectors(n.contact_point_in_a,n.contact_point_in_b),n.contact_point.scale(.5),n.object_a.transform_inverse.transformVector3(n.contact_point_in_a),n.object_b.transform_inverse.transformVector3(n.contact_point_in_b),n.restitution=(this.object_a.restitution+this.object_b.restitution)/2,n.friction=(this.object_a.friction+this.object_b.friction)/2,o.GjkEpa.result=n,null)}}return!1}return this.updateDirection()===!0?null:i},findDirectionFromLine:function(){i.scaleVector(this.points[1].point,-1),a.subtractVectors(this.points[0].point,this.points[1].point),a.dot(i)<0?(this.next_direction.copy(i),o.ObjectPool.freeObject("GJK2SupportPoint",this.points[1]),this.points.length=1):(this.next_direction.crossVectors(a,i),this.next_direction.cross(a),0===this.next_direction.x&&0===this.next_direction.y&&0===this.next_direction.z&&(a.normalize(),this.next_direction.x=1-Math.abs(a.x),this.next_direction.y=1-Math.abs(a.y),this.next_direction.z=1-Math.abs(a.z)))},findDirectionFromTriangle:function(){var t=this.points[2],c=this.points[1],h=this.points[0];

	i.scaleVector(t.point,-1),a.subtractVectors(c.point,t.point),r.subtractVectors(h.point,t.point),e.crossVectors(a,r),s.crossVectors(a,e),n.crossVectors(e,r),n.dot(i)>=0?r.dot(i)>=0?(this.points.length=0,this.points.push(h,t),o.ObjectPool.freeObject("GJK2SupportPoint",c),this.next_direction.crossVectors(r,i),this.next_direction.cross(r)):a.dot(i)>=0?(this.points.length=0,this.points.push(c,t),o.ObjectPool.freeObject("GJK2SupportPoint",h),this.next_direction.crossVectors(a,i),this.next_direction.cross(a)):(this.points.length=0,this.points.push(t),o.ObjectPool.freeObject("GJK2SupportPoint",c),o.ObjectPool.freeObject("GJK2SupportPoint",h)):s.dot(i)>=0?a.dot(i)>=0?(this.points.length=0,this.points.push(c,t),o.ObjectPool.freeObject("GJK2SupportPoint",h),this.next_direction.crossVectors(a,i),this.next_direction.cross(a)):(this.points.length=0,this.points.push(t),o.ObjectPool.freeObject("GJK2SupportPoint",c),o.ObjectPool.freeObject("GJK2SupportPoint",h)):e.dot(i)>=0?(this.next_direction.copy(e),this.points.length=0,this.points.push(t,c,h)):(this.next_direction.copy(e),this.next_direction.scale(-1))},getFaceNormal:function(t,i,o,e){a.subtractVectors(i.point,t.point),r.subtractVectors(o.point,t.point),e.crossVectors(a,r),e.normalize()},faceNormalDotOrigin:function(t,i,o){return this.getFaceNormal(t,i,o,e),s.addVectors(t.point,i.point),s.add(o.point),s.scale(-3),s.normalize(),e.dot(s)},findDirectionFromTetrahedron:function(){var t,i=this.points[3],s=this.points[2],n=this.points[1],a=this.points[0],r=null,c=o.EPSILON;return t=this.faceNormalDotOrigin(s,n,a),t>c&&(r=1,c=t),t=this.faceNormalDotOrigin(i,n,s),t>c&&(r=2,c=t),t=this.faceNormalDotOrigin(n,i,a),t>c&&(r=3,c=t),t=this.faceNormalDotOrigin(a,i,s),t>c&&(r=4,c=t),null===r?!0:void(1===r?(this.points.length=0,this.points.push(s,n,a),this.getFaceNormal(s,n,a,e),this.next_direction.copy(e)):2===r?(this.points.length=0,this.points.push(i,n,s),this.getFaceNormal(i,n,s,e),this.next_direction.copy(e)):3===r?(this.points.length=0,this.points.push(n,i,a),this.getFaceNormal(n,i,a,e),this.next_direction.copy(e)):4===r&&(this.points.length=0,this.points.push(a,i,s),this.getFaceNormal(a,i,s,e),this.next_direction.copy(e)))},containsOrigin:function(){var t=this.points[3],i=this.points[2],o=this.points[1],s=this.points[0];return a.subtractVectors(s.point,t.point),c.subtractVectors(o.point,t.point),e.crossVectors(a,c),e.dot(t.point)>0?!1:(a.subtractVectors(o.point,t.point),c.subtractVectors(i.point,t.point),e.crossVectors(a,c),e.dot(t.point)>0?!1:(a.subtractVectors(i.point,t.point),c.subtractVectors(s.point,t.point),e.crossVectors(a,c),e.dot(t.point)>0?!1:(a.subtractVectors(s.point,o.point),c.subtractVectors(i.point,o.point),e.crossVectors(a,c),e.dot(s.point)>0?!1:!0)))},updateDirection:function(){if(0===this.points.length)this.next_direction.subtractVectors(this.object_b.position,this.object_a.position);else if(1===this.points.length)this.next_direction.scale(-1);else if(2===this.points.length)this.findDirectionFromLine();else{if(3!==this.points.length)return this.findDirectionFromTetrahedron();this.findDirectionFromTriangle()}}}}(),o.SphereSphere=function(t,i){var s=t.position,n=i.position;e.subtractVectors(n,s);var a=e.length();if(!(a>t.shape.radius+i.shape.radius)){var r=o.ObjectPool.getObject("ContactDetails");return r.object_a=t,r.object_b=i,r.contact_normal.scaleVector(e,1/a),e.scale(-.5),r.contact_point.addVectors(e,s),r.penetration_depth=t.shape.radius+i.shape.radius-a,r.contact_point_in_a.scaleVector(r.contact_normal,r.object_a.shape.radius),r.contact_point_in_a.add(r.object_a.position),r.contact_point_in_b.scaleVector(r.contact_normal,-r.object_b.shape.radius),r.contact_point_in_b.add(r.object_b.position),r.contact_point.addVectors(r.contact_point_in_a,r.contact_point_in_b),r.contact_point.scale(.5),r.object_a.transform_inverse.transformVector3(r.contact_point_in_a),r.object_b.transform_inverse.transformVector3(r.contact_point_in_b),r.restitution=(t.restitution+i.restitution)/2,r.friction=(t.friction+i.friction)/2,r}},o.TriangleTriangle=function(t,i){var n=i.classifyVertex(t.a),a=i.classifyVertex(t.b),r=i.classifyVertex(t.c);if(n>0&&a>0&&r>0||0>n&&0>a&&0>r)return null;var c=t.classifyVertex(i.a),h=t.classifyVertex(i.b),l=t.classifyVertex(i.c);if(c>0&&h>0&&l>0||0>c&&0>h&&0>l)return null;var p=new o.Vector3;p.crossVectors(t.normal,i.normal),p.normalize();var _,b=p.dot(t.a),u=p.dot(t.b),f=p.dot(t.c),d=p.dot(i.a),m=p.dot(i.b),y=p.dot(i.c),j=t.a,w=t.b,x=t.c,v=i.a,g=i.b,V=i.c;Math.sign(n)===Math.sign(a)?(_=n,n=r,r=_,_=b,b=f,f=_,_=j,j=x,x=_):Math.sign(n)===Math.sign(r)&&(_=n,n=a,a=_,_=b,b=u,u=_,_=j,j=w,w=_),Math.sign(c)===Math.sign(h)?(_=c,c=l,l=_,_=d,d=y,y=_,_=v,v=V,V=_):Math.sign(c)===Math.sign(l)&&(_=c,c=h,h=_,_=d,d=m,m=_,_=v,v=g,g=_);var z=b+(u-b)*(n/(n-a)),B=b+(f-b)*(n/(n-r)),C=d+(m-d)*(c/(c-h)),S=d+(y-d)*(c/(c-l));if(z>B&&(_=z,z=B,B=_,_=u,u=f,f=_,_=w,w=x,x=_),C>S&&(_=C,C=S,S=_,_=m,m=y,y=_,_=g,g=V,V=_),z>=C&&S>=z||B>=C&&S>=B||C>=z&&B>=C||S>=z&&B>=S){var P=o.ObjectPool.getObject("ContactDetails");P.object_a=t,P.object_b=i;var M=new o.Vector3,O=new o.Vector3,I=new o.Vector3,A=new o.Vector3,T=new o.Vector3,E=new o.Vector3,k=!1,G=!1;return i.classifyVertex(j)<=0?(k=!0,o.GeometryMethods.findClosestPointInTriangle(j,v,g,V,O),M.copy(j),I.copy(i.normal),I.scale(-1)):z>=C&&S>=z?(k=!0,o.GeometryMethods.findClosestPointInTriangle(w,v,g,V,O),M.copy(w),I.copy(i.normal),I.scale(-1)):B>=C&&S>=B&&(k=!0,o.GeometryMethods.findClosestPointInTriangle(x,v,g,V,O),M.copy(x),I.copy(i.normal),I.scale(-1)),t.classifyVertex(v)<=0?(G=!0,o.GeometryMethods.findClosestPointInTriangle(v,j,w,x,A),T.copy(v),E.copy(t.normal)):C>=z&&B>=C?(G=!0,o.GeometryMethods.findClosestPointInTriangle(g,j,w,x,A),T.copy(g),E.copy(t.normal)):S>=z&&B>=S&&(G=!0,o.GeometryMethods.findClosestPointInTriangle(V,j,w,x,A),T.copy(V),E.copy(t.normal)),e.subtractVectors(M,O),s.subtractVectors(A,T),!G||k&&e.lengthSquared()<s.lengthSquared()?(P.contact_point_in_a.copy(M),P.contact_point_in_b.copy(O),P.contact_normal.copy(I)):(P.contact_point_in_a.copy(A),P.contact_point_in_b.copy(T),P.contact_normal.copy(E)),e.subtractVectors(P.contact_point_in_a,P.contact_point_in_b),P.penetration_depth=e.length(),P.contact_point.addVectors(P.contact_point_in_a,P.contact_point_in_b),P.contact_point.scale(.5),P}return null},o.Constraint=function(){var t=0;return function(){this.id=t++,this.active=!0,this.object_a=null,this.object_b=null,this.limit=new o.ConstraintLimit,this.motor=new o.ConstraintMotor,this.rows=[],this.factor=1,this.last_impulse=new o.Vector3,this.breaking_threshold=0,this.listeners={}}}(),o.EventEmitter.apply(o.Constraint),o.Constraint.prototype.deactivate=function(){this.active=!1,this.emit("deactivate")},o.Constraint.prototype.update=function(){},o.ConstraintLimit=function(t,i){this.erp=.3,this.constraint_row=null,this.set(t,i)},o.ConstraintLimit.prototype.set=function(t,i){this.limit_lower=t,this.limit_upper=i,this.enabled=null!=this.limit_lower||null!=this.limit_upper},o.ConstraintLimit.prototype.createConstraintRow=function(){this.constraint_row=o.ConstraintRow.createConstraintRow()},o.ConstraintMotor=function(t,i){this.constraint_row=null,this.set(t,i)},o.ConstraintMotor.prototype.set=function(t,i){this.enabled=null!=t&&null!=i,this.torque=t,this.max_speed=i},o.ConstraintMotor.prototype.createConstraintRow=function(){this.constraint_row=o.ConstraintRow.createConstraintRow()},o.ConstraintRow=function(){this.jacobian=new Float64Array(12),this.B=new Float64Array(12),this.D=0,this.lower_limit=-(1/0),this.upper_limit=1/0,this.bias=0,this.multiplier=0,this.multiplier_cached=0,this.eta=0,this.eta_row=new Float64Array(12)},o.ConstraintRow.createConstraintRow=function(){var t=o.ObjectPool.getObject("ConstraintRow");return t.lower_limit=-(1/0),t.upper_limit=1/0,t.bias=0,t.jacobian[0]=t.jacobian[1]=t.jacobian[2]=t.jacobian[3]=t.jacobian[4]=t.jacobian[5]=t.jacobian[6]=t.jacobian[7]=t.jacobian[8]=t.jacobian[9]=t.jacobian[10]=t.jacobian[11]=0,t},o.ConstraintRow.prototype.computeB=function(t){var i;null!=t.object_a&&t.object_a._mass!==1/0?(i=t.object_a._mass_inverted,this.B[0]=i*this.jacobian[0]*t.object_a.linear_factor.x,this.B[1]=i*this.jacobian[1]*t.object_a.linear_factor.y,this.B[2]=i*this.jacobian[2]*t.object_a.linear_factor.z,e.x=this.jacobian[3],e.y=this.jacobian[4],e.z=this.jacobian[5],t.object_a.inverseInertiaTensorWorldFrame.transformVector3(e),this.B[3]=e.x*t.object_a.angular_factor.x,this.B[4]=e.y*t.object_a.angular_factor.y,this.B[5]=e.z*t.object_a.angular_factor.z):(this.B[0]=this.B[1]=this.B[2]=0,this.B[3]=this.B[4]=this.B[5]=0),null!=t.object_b&&t.object_b._mass!==1/0?(i=t.object_b._mass_inverted,this.B[6]=i*this.jacobian[6]*t.object_b.linear_factor.x,this.B[7]=i*this.jacobian[7]*t.object_b.linear_factor.y,this.B[8]=i*this.jacobian[8]*t.object_b.linear_factor.z,e.x=this.jacobian[9],e.y=this.jacobian[10],e.z=this.jacobian[11],t.object_b.inverseInertiaTensorWorldFrame.transformVector3(e),this.B[9]=e.x*t.object_b.linear_factor.x,this.B[10]=e.y*t.object_b.linear_factor.y,this.B[11]=e.z*t.object_b.linear_factor.z):(this.B[6]=this.B[7]=this.B[8]=0,this.B[9]=this.B[10]=this.B[11]=0)},o.ConstraintRow.prototype.computeD=function(){this.D=this.jacobian[0]*this.B[0]+this.jacobian[1]*this.B[1]+this.jacobian[2]*this.B[2]+this.jacobian[3]*this.B[3]+this.jacobian[4]*this.B[4]+this.jacobian[5]*this.B[5]+this.jacobian[6]*this.B[6]+this.jacobian[7]*this.B[7]+this.jacobian[8]*this.B[8]+this.jacobian[9]*this.B[9]+this.jacobian[10]*this.B[10]+this.jacobian[11]*this.B[11]},o.ConstraintRow.prototype.computeEta=function(t,i){var o,s=1/i;null==t.object_a||t.object_a._mass===1/0?this.eta_row[0]=this.eta_row[1]=this.eta_row[2]=this.eta_row[3]=this.eta_row[4]=this.eta_row[5]=0:(o=t.object_a._mass_inverted,this.eta_row[0]=(t.object_a.linear_velocity.x+o*t.object_a.accumulated_force.x)*s,this.eta_row[1]=(t.object_a.linear_velocity.y+o*t.object_a.accumulated_force.y)*s,this.eta_row[2]=(t.object_a.linear_velocity.z+o*t.object_a.accumulated_force.z)*s,e.copy(t.object_a.accumulated_torque),t.object_a.inverseInertiaTensorWorldFrame.transformVector3(e),this.eta_row[3]=(t.object_a.angular_velocity.x+e.x)*s,this.eta_row[4]=(t.object_a.angular_velocity.y+e.y)*s,this.eta_row[5]=(t.object_a.angular_velocity.z+e.z)*s),null==t.object_b||t.object_b._mass===1/0?this.eta_row[6]=this.eta_row[7]=this.eta_row[8]=this.eta_row[9]=this.eta_row[10]=this.eta_row[11]=0:(o=t.object_b._mass_inverted,this.eta_row[6]=(t.object_b.linear_velocity.x+o*t.object_b.accumulated_force.x)*s,this.eta_row[7]=(t.object_b.linear_velocity.y+o*t.object_b.accumulated_force.y)*s,this.eta_row[8]=(t.object_b.linear_velocity.z+o*t.object_b.accumulated_force.z)*s,e.copy(t.object_b.accumulated_torque),t.object_b.inverseInertiaTensorWorldFrame.transformVector3(e),this.eta_row[9]=(t.object_b.angular_velocity.x+e.x)*s,this.eta_row[10]=(t.object_b.angular_velocity.y+e.y)*s,this.eta_row[11]=(t.object_b.angular_velocity.z+e.z)*s);var n=this.jacobian[0]*this.eta_row[0]+this.jacobian[1]*this.eta_row[1]+this.jacobian[2]*this.eta_row[2]+this.jacobian[3]*this.eta_row[3]+this.jacobian[4]*this.eta_row[4]+this.jacobian[5]*this.eta_row[5]+this.jacobian[6]*this.eta_row[6]+this.jacobian[7]*this.eta_row[7]+this.jacobian[8]*this.eta_row[8]+this.jacobian[9]*this.eta_row[9]+this.jacobian[10]*this.eta_row[10]+this.jacobian[11]*this.eta_row[11];this.eta=this.bias*s-n},o.ContactConstraint=function(){o.Constraint.call(this),this.contact=null},o.ContactConstraint.prototype=Object.create(o.Constraint.prototype),o.ContactConstraint.prototype.buildFromContact=function(t){this.object_a=t.object_a,this.object_b=t.object_b,this.contact=t;var i=this,e=function(){this.removeListener("destroy",e),i.deactivate()};this.contact.addListener("destroy",e);var s=this.rows[0]||o.ObjectPool.getObject("ConstraintRow");s.lower_limit=0,s.upper_limit=1/0,this.rows[0]=s,this.update()},o.ContactConstraint.prototype.update=function(){var t=this.rows[0];null==this.object_a||this.object_a._mass===1/0?(t.jacobian[0]=t.jacobian[1]=t.jacobian[2]=0,t.jacobian[3]=t.jacobian[4]=t.jacobian[5]=0):(t.jacobian[0]=-this.contact.contact_normal.x,t.jacobian[1]=-this.contact.contact_normal.y,t.jacobian[2]=-this.contact.contact_normal.z,e.subtractVectors(this.contact.contact_point,this.contact.object_a.position),e.cross(this.contact.contact_normal),t.jacobian[3]=-e.x,t.jacobian[4]=-e.y,t.jacobian[5]=-e.z),null==this.object_b||this.object_b._mass===1/0?(t.jacobian[6]=t.jacobian[7]=t.jacobian[8]=0,t.jacobian[9]=t.jacobian[10]=t.jacobian[11]=0):(t.jacobian[6]=this.contact.contact_normal.x,t.jacobian[7]=this.contact.contact_normal.y,t.jacobian[8]=this.contact.contact_normal.z,e.subtractVectors(this.contact.contact_point,this.contact.object_b.position),e.cross(this.contact.contact_normal),t.jacobian[9]=e.x,t.jacobian[10]=e.y,t.jacobian[11]=e.z),t.bias=0;var i=0;this.object_a._mass!==1/0&&(this.object_a.getVelocityInLocalPoint(this.contact.contact_point_in_a,e),i+=e.dot(this.contact.contact_normal)),this.object_b._mass!==1/0&&(this.object_b.getVelocityInLocalPoint(this.contact.contact_point_in_b,e),i-=e.dot(this.contact.contact_normal)),t.bias+=i*this.contact.restitution},o.FrictionConstraint=function(){o.Constraint.call(this),this.contact=null},o.FrictionConstraint.prototype=Object.create(o.Constraint.prototype),o.FrictionConstraint.prototype.buildFromContact=function(t){this.rows[0]=this.rows[0]||o.ObjectPool.getObject("ConstraintRow"),this.rows[1]=this.rows[1]||o.ObjectPool.getObject("ConstraintRow"),this.object_a=t.object_a,this.object_b=t.object_b,this.contact=t;var i=this,e=function(){this.removeListener("destroy",e),i.deactivate()};this.contact.addListener("destroy",e),this.update()},o.FrictionConstraint.prototype.update=function(){var t=new o.Vector3,i=new o.Vector3,s=new o.Vector3,a=new o.Vector3;return function(){var o=this.rows[0],r=this.rows[1];t.subtractVectors(this.contact.contact_point,this.object_a.position),i.subtractVectors(this.contact.contact_point,this.object_b.position),this.contact.contact_normal.findOrthogonal(s,a),null==this.object_a||this.object_a._mass===1/0?(o.jacobian[0]=o.jacobian[1]=o.jacobian[2]=0,o.jacobian[3]=o.jacobian[4]=o.jacobian[5]=0,r.jacobian[0]=r.jacobian[1]=r.jacobian[2]=0,r.jacobian[3]=r.jacobian[4]=r.jacobian[5]=0):(o.jacobian[0]=-s.x,o.jacobian[1]=-s.y,o.jacobian[2]=-s.z,e.crossVectors(t,s),o.jacobian[3]=-e.x,o.jacobian[4]=-e.y,o.jacobian[5]=-e.z,r.jacobian[0]=-a.x,r.jacobian[1]=-a.y,r.jacobian[2]=-a.z,e.crossVectors(t,a),r.jacobian[3]=-e.x,r.jacobian[4]=-e.y,r.jacobian[5]=-e.z),null==this.object_b||this.object_b._mass===1/0?(o.jacobian[6]=o.jacobian[7]=o.jacobian[8]=0,o.jacobian[9]=o.jacobian[10]=o.jacobian[11]=0,r.jacobian[6]=r.jacobian[7]=r.jacobian[8]=0,r.jacobian[9]=r.jacobian[10]=r.jacobian[11]=0):(o.jacobian[6]=s.x,o.jacobian[7]=s.y,o.jacobian[8]=s.z,e.crossVectors(i,s),o.jacobian[9]=e.x,o.jacobian[10]=e.y,o.jacobian[11]=e.z,r.jacobian[6]=a.x,r.jacobian[7]=a.y,r.jacobian[8]=a.z,e.crossVectors(i,a),r.jacobian[9]=e.x,r.jacobian[10]=e.y,r.jacobian[11]=e.z),this.object_a.getVelocityInLocalPoint(this.contact.contact_point_in_a,e),this.object_a._mass!==1/0?(e.scaleVector(this.object_a.accumulated_force,1/this.object_a._mass),e.add(this.object_a.linear_velocity),this.object_a.inverseInertiaTensorWorldFrame.transformVector3Into(this.object_a.accumulated_torque,n),n.add(this.object_a.angular_velocity),n.cross(this.contact.contact_point_in_a),e.add(n),e.scale(this.object_a._mass)):e.set(0,0,0);var c=25*this.contact.friction;0>c&&(c=0),o.lower_limit=r.lower_limit=-c,o.upper_limit=r.upper_limit=c,o.bias=r.bias=0,this.rows[0]=o,this.rows[1]=r}}(),o.HingeConstraint=function(t,i,e,s,n){o.Constraint.call(this),this.object_a=t,this.hinge_a=i,this.point_a=e,this.initial_quaternion=new o.Quaternion,this.object_b=s||null,this.point_b=new o.Vector3,this.hinge_b=new o.Vector3,null!=this.object_b?(this.object_a.rotation.transformVector3Into(this.hinge_a,this.hinge_b),r.invertQuaternion(this.object_b.rotation),r.transformVector3(this.hinge_b),this.point_b=n,this.initial_quaternion.multiplyQuaternions(r,this.object_a.rotation)):(this.object_a.updateDerived(),this.object_a.rotation.transformVector3Into(this.hinge_a,this.hinge_b),this.object_a.transform.transformVector3Into(this.point_a,this.point_b),this.initial_quaternion.set(this.object_a.rotation.x,this.object_a.rotation.y,this.object_a.rotation.z,this.object_a.rotation.w)),this.erp=.1;for(var a=0;5>a;a++)this.rows[a]=o.ConstraintRow.createConstraintRow()},o.HingeConstraint.prototype=Object.create(o.Constraint.prototype),o.HingeConstraint.prototype.updateLimits=function(i,o){if(this.limit.enabled===!1)return void t(this);var e,s;return null==this.object_b?e=this.initial_quaternion.signedAngleBetween(this.object_a.rotation,i):(r.invertQuaternion(this.object_b.rotation),r.multiply(this.object_a.rotation),e=this.initial_quaternion.signedAngleBetween(r,i)),(null==this.limit.limit_lower||this.limit.limit_lower<e)&&(null==this.limit.limit_upper||this.limit.limit_upper>e)?void t(this):void(null!=this.limit.limit_lower&&e<=this.limit.limit_lower?(null==this.limit.constraint_row&&(this.limit.createConstraintRow(),this.limit.constraint_row.upper_limit=0,this.rows.push(this.limit.constraint_row)),this.limit.constraint_row.jacobian[3]=-i.x,this.limit.constraint_row.jacobian[4]=-i.y,this.limit.constraint_row.jacobian[5]=-i.z,null!=this.object_b&&(this.limit.constraint_row.jacobian[9]=i.x,this.limit.constraint_row.jacobian[10]=i.y,this.limit.constraint_row.jacobian[11]=i.z),s=e-this.limit.limit_lower,this.limit.constraint_row.bias=s*this.limit.erp/o):null!=this.limit.limit_upper&&e>=this.limit.limit_upper&&(null==this.limit.constraint_row&&(this.limit.createConstraintRow(),this.limit.constraint_row.lower_limit=0,this.rows.push(this.limit.constraint_row)),this.limit.constraint_row.jacobian[3]=-i.x,this.limit.constraint_row.jacobian[4]=-i.y,this.limit.constraint_row.jacobian[5]=-i.z,null!=this.object_b&&(this.limit.constraint_row.jacobian[9]=i.x,this.limit.constraint_row.jacobian[10]=i.y,this.limit.constraint_row.jacobian[11]=i.z),s=e-this.limit.limit_upper,this.limit.constraint_row.bias=s*this.limit.erp/o))},o.HingeConstraint.prototype.updateMotor=function(t){return this.motor.enabled===!1?void i(this):(null==this.motor.constraint_row&&(this.motor.createConstraintRow(),this.rows.push(this.motor.constraint_row),this.motor.constraint_row.jacobian[3]=t.x,this.motor.constraint_row.jacobian[4]=t.y,this.motor.constraint_row.jacobian[5]=t.z,null!=this.object_b&&(this.motor.constraint_row.jacobian[9]=-t.x,this.motor.constraint_row.jacobian[10]=-t.y,this.motor.constraint_row.jacobian[11]=-t.z)),this.motor.constraint_row.bias=this.motor.max_speed,void(this.motor.max_speed>=0?(this.motor.constraint_row.lower_limit=0,this.motor.constraint_row.upper_limit=this.motor.torque):(this.motor.constraint_row.lower_limit=-this.motor.torque,this.motor.constraint_row.upper_limit=0)))},o.HingeConstraint.prototype.update=function(){var t=new o.Vector3,i=new o.Vector3,a=new o.Vector3,r=new o.Vector3,c=new o.Vector3;return function(o){this.object_a.rotation.transformVector3Into(this.hinge_a,c),this.object_a.transform.transformVector3Into(this.point_a,e),t.subtractVectors(e,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-t.z,this.rows[0].jacobian[5]=t.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=t.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-t.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-t.y,this.rows[2].jacobian[4]=t.x,this.rows[2].jacobian[5]=0,c.findOrthogonal(a,r),this.rows[3].jacobian[3]=-a.x,this.rows[3].jacobian[4]=-a.y,this.rows[3].jacobian[5]=-a.z,this.rows[4].jacobian[3]=-r.x,this.rows[4].jacobian[4]=-r.y,this.rows[4].jacobian[5]=-r.z,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,s),i.subtractVectors(s,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=i.z,this.rows[0].jacobian[11]=-i.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-i.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=i.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=i.y,this.rows[2].jacobian[10]=-i.z,this.rows[2].jacobian[11]=0,this.rows[3].jacobian[9]=a.x,this.rows[3].jacobian[10]=a.y,this.rows[3].jacobian[11]=a.z,this.rows[4].jacobian[9]=r.x,this.rows[4].jacobian[10]=r.y,this.rows[4].jacobian[11]=r.z):s.copy(this.point_b),n.subtractVectors(e,s),n.scale(this.erp/o),this.rows[0].bias=n.x,this.rows[1].bias=n.y,this.rows[2].bias=n.z,null!=this.object_b?(this.object_a.rotation.transformVector3Into(this.hinge_a,e),this.object_b.rotation.transformVector3Into(this.hinge_b,s),e.cross(s),this.rows[3].bias=-e.dot(a)*this.erp/o,this.rows[4].bias=-e.dot(r)*this.erp/o):this.rows[3].bias=this.rows[4].bias=0,this.updateLimits(c,o),this.updateMotor(c)}}(),o.PointConstraint=function(t,i,e,s){o.Constraint.call(this),this.object_a=t,this.point_a=i,this.object_b=e||null,null!=this.object_b?this.point_b=s:(this.point_b=new o.Vector3,this.object_a.updateDerived(),this.object_a.transform.transformVector3Into(this.point_a,this.point_b)),this.erp=.1;for(var n=0;3>n;n++)this.rows[n]=o.ObjectPool.getObject("ConstraintRow"),this.rows[n].lower_limit=-(1/0),this.rows[n].upper_limit=1/0,this.rows[n].bias=0,this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=0},o.PointConstraint.prototype=Object.create(o.Constraint.prototype),o.PointConstraint.prototype.update=function(){var t=new o.Vector3,i=new o.Vector3;return function(o){this.object_a.transform.transformVector3Into(this.point_a,e),t.subtractVectors(e,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-t.z,this.rows[0].jacobian[5]=t.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=t.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-t.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-t.y,this.rows[2].jacobian[4]=t.x,this.rows[2].jacobian[5]=0,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,s),i.subtractVectors(s,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=i.z,this.rows[0].jacobian[11]=-i.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-i.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=i.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=i.y,this.rows[2].jacobian[10]=-i.x,this.rows[2].jacobian[11]=0):s.copy(this.point_b),n.subtractVectors(e,s),n.scale(this.erp/o),this.rows[0].bias=n.x,this.rows[1].bias=n.y,this.rows[2].bias=n.z}}(),o.SliderConstraint=function(t,i,e){o.Constraint.call(this),this.object_a=t,this.axis=i,this.object_b=e,this.position_error=new o.Vector3,this.position_error.subtractVectors(this.object_b.position,this.object_a.position),r.invertQuaternion(this.object_a.rotation),r.transformVector3(this.position_error),this.rotation_difference=new o.Quaternion,null!=this.object_b&&(r.invertQuaternion(this.object_b.rotation),this.rotation_difference.multiplyQuaternions(r,this.object_a.rotation)),this.erp=.1;for(var s=0;5>s;s++)this.rows[s]=o.ObjectPool.getObject("ConstraintRow"),this.rows[s].lower_limit=-(1/0),this.rows[s].upper_limit=1/0,this.rows[s].bias=0,this.rows[s].jacobian[0]=this.rows[s].jacobian[1]=this.rows[s].jacobian[2]=this.rows[s].jacobian[3]=this.rows[s].jacobian[4]=this.rows[s].jacobian[5]=this.rows[s].jacobian[6]=this.rows[s].jacobian[7]=this.rows[s].jacobian[8]=this.rows[s].jacobian[9]=this.rows[s].jacobian[10]=this.rows[s].jacobian[11]=0},o.SliderConstraint.prototype=Object.create(o.Constraint.prototype),o.SliderConstraint.prototype.update=function(){var t=new o.Vector3,i=new o.Vector3,e=new o.Vector3;return function(o){this.object_a.rotation.transformVector3Into(this.axis,t),t.findOrthogonal(i,e),this._updateLinearConstraints(o,i,e),this._updateAngularConstraints(o,i,e)}}(),o.SliderConstraint.prototype._updateLinearConstraints=function(t,i,n){var a=new o.Vector3;a.subtractVectors(this.object_b.position,this.object_a.position);var r=new o.Vector3;r.crossVectors(a,i),this.rows[0].jacobian[0]=-i.x,this.rows[0].jacobian[1]=-i.y,this.rows[0].jacobian[2]=-i.z,this.rows[0].jacobian[6]=i.x,this.rows[0].jacobian[7]=i.y,this.rows[0].jacobian[8]=i.z,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=0,this.rows[0].jacobian[11]=0,r.crossVectors(a,n),this.rows[1].jacobian[0]=-n.x,this.rows[1].jacobian[1]=-n.y,this.rows[1].jacobian[2]=-n.z,this.rows[1].jacobian[6]=n.x,this.rows[1].jacobian[7]=n.y,this.rows[1].jacobian[8]=n.z,this.rows[1].jacobian[9]=0,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=0,this.object_a.rotation.transformVector3Into(this.position_error,e),s.subtractVectors(a,e),s.scale(this.erp/t),this.rows[0].bias=-i.dot(s),this.rows[1].bias=-n.dot(s)},o.SliderConstraint.prototype._updateAngularConstraints=function(t,i,e,s){this.rows[2].jacobian[3]=this.rows[3].jacobian[4]=this.rows[4].jacobian[5]=-1,this.rows[2].jacobian[9]=this.rows[3].jacobian[10]=this.rows[4].jacobian[11]=1,r.invertQuaternion(this.object_b.rotation),r.multiply(this.object_a.rotation),c.invertQuaternion(this.rotation_difference),c.multiply(r);var n=new o.Vector3;n.x=c.x,n.y=c.y,n.z=c.z,n.scale(this.erp/t)},o.WeldConstraint=function(t,i,e,s){o.Constraint.call(this),this.object_a=t,this.point_a=i,this.object_b=e||null,this.point_b=s||null,this.rotation_difference=new o.Quaternion,null!=this.object_b&&(r.invertQuaternion(this.object_b.rotation),this.rotation_difference.multiplyQuaternions(r,this.object_a.rotation)),this.erp=.1;for(var n=0;3>n;n++)this.rows[n]=o.ObjectPool.getObject("ConstraintRow"),this.rows[n].lower_limit=-(1/0),this.rows[n].upper_limit=1/0,this.rows[n].bias=0,null==this.object_b&&(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=this.rows[n].jacobian[12]=0,this.rows[n].jacobian[n]=1);for(n=3;6>n;n++)this.rows[n]=o.ObjectPool.getObject("ConstraintRow"),this.rows[n].lower_limit=-(1/0),this.rows[n].upper_limit=1/0,this.rows[n].bias=0,null==this.object_b?(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=this.rows[n].jacobian[12]=0,this.rows[n].jacobian[n]=1):(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=0,this.rows[n].jacobian[3]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=0,this.rows[n].jacobian[n]=-1,this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=0,this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=0,this.rows[n].jacobian[n+6]=1)},o.WeldConstraint.prototype=Object.create(o.Constraint.prototype),o.WeldConstraint.prototype.update=function(){var t=new o.Vector3,i=new o.Vector3;return function(n){if(null!=this.object_b){this.object_a.transform.transformVector3Into(this.point_a,e),t.subtractVectors(e,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-t.z,this.rows[0].jacobian[5]=t.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=t.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-t.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-t.y,this.rows[2].jacobian[4]=t.x,this.rows[2].jacobian[5]=0,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,s),i.subtractVectors(s,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=i.z,this.rows[0].jacobian[11]=-i.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-i.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=i.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=i.y,this.rows[2].jacobian[10]=-i.x,this.rows[2].jacobian[11]=0):s.copy(this.point_b);var a=new o.Vector3;a.subtractVectors(e,s),a.scale(this.erp/n),this.rows[0].bias=a.x,this.rows[1].bias=a.y,this.rows[2].bias=a.z,r.invertQuaternion(this.object_b.rotation),r.multiply(this.object_a.rotation),c.invertQuaternion(this.rotation_difference),c.multiply(r),a.x=c.x,a.y=c.y,a.z=c.z,a.scale(this.erp/n),this.rows[3].bias=a.x,this.rows[4].bias=a.y,this.rows[5].bias=a.z}}}(),o.DragForce=function(t,i){this.drag_coefficient=t||0,this.squared_drag_coefficient=i||0,this.enabled=!0,this.affected=[]},o.DragForce.prototype.enable=o.ForceGenerator.prototype.enable,o.DragForce.prototype.disable=o.ForceGenerator.prototype.disable,o.DragForce.prototype.affect=o.ForceGenerator.prototype.affect,o.DragForce.prototype.unaffect=o.ForceGenerator.prototype.unaffect,o.DragForce.prototype.applyForce=function(){if(this.enabled){var t,i,o,s,n=e;for(t=0,i=this.affected.length;i>t;t++)o=this.affected[t],n.copy(o.linear_velocity),s=n.length(),s=this.drag_coefficient*s+this.squared_drag_coefficient*s*s,n.normalize(),n.scale(-s),o.applyForce(n)}},o.RayIntersection=function(){this.object=null,this.point=new o.Vector3,this.t=null,this.normal=new o.Vector3},o.BoxShape=function(t,i,e){this.half_width=t,this.half_height=i,this.half_depth=e,this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.BoxShape.prototype.calculateLocalAABB=function(t){t.min.x=-this.half_width,t.min.y=-this.half_height,t.min.z=-this.half_depth,t.max.x=this.half_width,t.max.y=this.half_height,t.max.z=this.half_depth},o.BoxShape.prototype.getInertiaTensor=function(t){var i=this.half_height*this.half_height*4,e=this.half_width*this.half_width*4,s=this.half_depth*this.half_depth*4,n=.0833*t;return new o.Matrix3(n*(i+s),0,0,0,n*(e+s),0,0,0,n*(i+e))},o.BoxShape.prototype.findSupportPoint=function(t,i){i.x=t.x<0?-this.half_width:this.half_width,i.y=t.y<0?-this.half_height:this.half_height,i.z=t.z<0?-this.half_depth:this.half_depth},o.BoxShape.prototype.rayIntersect=function(){var t,i,e,s,n,a,r,c=new o.Vector3;return function(h,l){t=0,c.subtractVectors(l,h),i=c.length(),c.scale(1/i);for(var p=0;3>p;p++){if(e=0===p?"x":1===p?"y":"z",r=0===p?this.half_width:1===p?this.half_height:this.half_depth,Math.abs(c[e])<o.EPSILON&&(h[e]<-r||h[e]>r))return null;if(s=1/c[e],n=(-r-h[e])*s,a=(r-h[e])*s,n>a&&(s=n,n=a,a=s),t=Math.max(t,n),i=Math.min(i,a),t>i)return null}var _=o.ObjectPool.getObject("RayIntersection");_.object=this,_.t=t,_.point.scaleVector(c,t),_.point.add(h);var b=1/0;for(p=0;3>p;p++)e=0===p?"x":1===p?"y":"z",r=0===p?this.half_width:1===p?this.half_height:this.half_depth,r-Math.abs(_.point[e])<b&&(_.normal.x=_.normal.y=_.normal.z=0,_.normal[e]=_.point[e]<0?-1:1,b=r-Math.abs(_.point[e]));return _}}(),o.CompoundShape=function(){this.child_shapes=[],this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.CompoundShape.prototype.addChildShape=function(t,i,e){this.child_shapes.push(new o.CompoundShapeChild(t,i,e)),
	this.calculateLocalAABB(this.aabb)},o.CompoundShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=1/0,t.max.x=t.max.y=t.max.z=-(1/0);var i,o;for(i=0;i<this.child_shapes.length;i++)o=this.child_shapes[i],t.min.x=Math.min(t.min.x,o.aabb.min.x),t.min.y=Math.min(t.min.y,o.aabb.min.y),t.min.z=Math.min(t.min.z,o.aabb.min.z),t.max.x=Math.max(t.max.x,o.aabb.max.x),t.max.y=Math.max(t.max.y,o.aabb.max.y),t.max.z=Math.max(t.max.z,o.aabb.max.z)},o.CompoundShape.prototype.getInertiaTensor=function(t){var i,s,n,a=new o.Matrix3,r=new o.Matrix3;for(t/=this.child_shapes.length,e.x=e.y=e.z=0,i=0;i<this.child_shapes.length;i++)s=this.child_shapes[i],e.subtract(s.position),r.e00=t*-(e.y*e.y+e.z*e.z),r.e10=t*e.x*e.y,r.e20=t*e.x*e.z,r.e01=t*e.x*e.y,r.e11=t*-(e.x*e.x+e.z*e.z),r.e21=t*e.y*e.z,r.e02=t*e.x*e.z,r.e12=t*e.y*e.z,r.e22=t*-(e.x*e.x+e.y*e.y),h.fromMatrix4(s.transform),n=s.shape.getInertiaTensor(t),h.transposeInto(l),h.multiply(n),h.multiply(l),a.e00+=h.e00+r.e00,a.e10+=h.e10+r.e10,a.e20+=h.e20+r.e20,a.e01+=h.e01+r.e01,a.e11+=h.e11+r.e11,a.e21+=h.e21+r.e21,a.e02+=h.e02+r.e02,a.e12+=h.e12+r.e12,a.e22+=h.e22+r.e22;return a},o.CompoundShape.prototype.rayIntersect=function(){var t=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};return function(i,e){var s,n,a,r=[],c=new o.Vector3,h=new o.Vector3;for(n=0;n<this.child_shapes.length;n++)a=this.child_shapes[n],a.transform_inverse.transformVector3Into(i,c),a.transform_inverse.transformVector3Into(e,h),s=a.shape.rayIntersect(c,h),null!=s&&(s.object=this,a.transform.transformVector3(s.point),r.push(s));return r.sort(t),r[0]||null}}(),o.CompoundShapeChild=function(t,i,e){this.shape=t,this.position=new o.Vector3(i.x,i.y,i.z),this.rotation=new o.Quaternion(e.x,e.y,e.z,e.w),this.transform=new o.Matrix4,this.transform_inverse=new o.Matrix4,this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this.aabb=new o.AABB,this.aabb.transform(this.shape.aabb,this.transform)},o.ConeShape=function(t,i){this.radius=t,this.half_height=i,this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb),this._sinangle=this.radius/Math.sqrt(this.radius*this.radius+Math.pow(2*this.half_height,2)),this._cosangle=Math.cos(Math.asin(this._sinangle))},o.ConeShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.z=-this.radius,t.min.y=-this.half_height,t.max.x=t.max.z=this.radius,t.max.y=this.half_height},o.ConeShape.prototype.getInertiaTensor=function(t){var i=.1*t*Math.pow(2*this.half_height,2)+.15*t*this.radius*this.radius;return new o.Matrix3(i,0,0,0,.3*t*this.radius*this.radius,0,0,0,i)},o.ConeShape.prototype.findSupportPoint=function(t,i){var o=Math.sqrt(t.x*t.x+t.z*t.z);if(t.y>t.length()*this._sinangle)i.x=i.z=0,i.y=this.half_height;else if(o>0){var e=this.radius/o;i.x=e*t.x,i.y=-this.half_height,i.z=e*t.z}else i.x=i.z=0,i.y=-this.half_height},o.ConeShape.prototype.rayIntersect=function(){var t,i=new o.Vector3,e=new o.Vector3,s=new o.Vector3,n=new o.Vector3,a=new o.Vector3;return function(r,c){i.subtractVectors(c,r),t=i.length(),i.scale(1/t);var h,l;e.x=e.y=e.z=0,h=this._rayIntersectBase(r,c,e,n),s.x=s.y=s.z=0,l=this._rayIntersectCone(r,i,t,s,a);var p;return h||l?!l||h&&l>h?(p=o.ObjectPool.getObject("RayIntersection"),p.object=this,p.t=h,p.point.copy(e),p.normal.copy(n),p):!h||l&&h>l?(p=o.ObjectPool.getObject("RayIntersection"),p.object=this,p.t=l,p.point.copy(s),p.normal.copy(a),p):null:null}}(),o.ConeShape.prototype._rayIntersectBase=function(){var t,i=new o.Vector3(0,-1,0),e=new o.Vector3,s=new o.Vector3,n=new o.Vector3;return function(o,a,r,c){return s.x=o.x,s.y=o.y+this.half_height,s.z=o.z,n.x=a.x,n.y=a.y+this.half_height,n.z=a.z,e.subtractVectors(n,s),t=-i.dot(s)/i.dot(e),0>t||t>1?null:(r.scaleVector(e,t),r.add(o),r.x*r.x+r.z*r.z>this.radius*this.radius?null:(c.x=c.z=0,c.y=-1,t*e.length()))}}(),o.ConeShape.prototype._rayIntersectCone=function(){var t=new o.Vector3;return function(i,s,n,a,r){var c=new o.Vector3(0,-1,0),h=c.dot(s),l=this._cosangle*this._cosangle,p=new o.Vector3;p.x=i.x,p.y=i.y-this.half_height,p.z=i.z;var _,b,u=c.dot(p),f=s.dot(p),d=p.dot(p),m=h*h-l,y=h*u-l*f,j=u*u-l*d,w=null;if(Math.abs(m)>=o.EPSILON){var x=y*y-j*m;if(x<-o.EPSILON)return null;if(x>o.EPSILON){var v=Math.sqrt(x),g=1/m;if(b=(-y-v)*g,b>=0&&n>=b&&(t.scaleVector(s,b),t.add(i),p.y=t.y-this.half_height,_=p.dot(c),_>=0&&(w=b,a.copy(t))),b=(-y+v)*g,b>=0&&n>=b&&(null==w||w>b)&&(t.scaleVector(s,b),t.add(i),p.y=t.y-this.half_height,_=p.dot(c),_>=0&&(w=b,a.copy(t))),null==w)return null;w/=n}else{if(b=-y/m,t.scaleVector(s,b),t.add(i),p.y=t.y-this.half_height,_=p.dot(c),0>_)return null;if(e.subtractVectors(t,i),e.lengthSquared()>n*n)return null;w=b/n,a.copy(t)}}else{if(!(Math.abs(y)>=o.EPSILON))return null;if(b=.5*j/y,t.scaleVector(s,b),t.add(i),p.y=t.y-this.half_height,_=p.dot(c),0>_)return null;w=b,a.copy(t)}return a.y<-this.half_height?null:(r.x=a.x,r.y=0,r.z=a.z,r.normalize(),r.x*=2*this.half_height/this.radius,r.y=this.radius/(2*this.half_height),r.z*=2*this.half_height/this.radius,r.normalize(),w*n)}}(),o.ConvexShape=function(t){this.vertices=[],this.faces=[],this.volume=0,this.center_of_mass=new o.Vector3,this._integral=new Float32Array(10),this.process(t),this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.ConvexShape.prototype.process=function(t){for(var i=t.slice(),n=null,a=null,r=0;r<i.length;r++){var c=i[r];(null==n||n.x>c.x)&&(n=c),(null==a||a.x>c.x)&&(a=c)}n===a&&(a=t[0]===n?t[1]:t[0]);var h=n,l=a;i.splice(i.indexOf(h),1),i.splice(i.indexOf(l),1);var p,_,b=-(1/0),u=null;for(r=0;r<i.length;r++)p=i[r],_=o.GeometryMethods.findSquaredDistanceFromSegment(p,h,l),_>b&&(b=_,u=r);var f=i[u];for(i.splice(u,1),e.subtractVectors(l,h),s.subtractVectors(f,h),e.cross(s),b=-(1/0),u=null,r=0;r<i.length;r++)p=i[r],_=Math.abs(e.dot(p)),_>b&&(b=_,u=r);var d=i[u];if(i.splice(u,1),e.dot(d)>0){var m=h;h=f,f=m}var y=new o.GjkEpa.Polyhedron({points:[{point:f},{point:l},{point:h},{point:d}]});for(r=0;r<i.length;r++){y.closest_face=null;for(var j=0;j<y.faces.length;j++)if(y.faces[j].active===!0&&y.faces[j].classifyVertex({point:i[r]})>0){y.closest_face=j;break}null!=y.closest_face&&y.addVertex({point:i[r]})}this.faces=y.faces.filter(function(t){return t.active});var w=this;this.faces.forEach(function(t){var i=t.a.point,o=t.b.point,e=t.c.point,s=w.vertices.indexOf(i),n=w.vertices.indexOf(o),a=w.vertices.indexOf(e);-1===s&&w.vertices.push(i),-1===n&&w.vertices.push(o),-1===a&&w.vertices.push(e)}),this.computeVolume(this.faces)},o.ConvexShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=0,t.max.x=t.max.y=t.max.z=0;for(var i=0;i<this.vertices.length;i++)t.min.x=Math.min(t.min.x,this.vertices[i].x),t.min.y=Math.min(t.min.y,this.vertices[i].y),t.min.z=Math.min(t.min.z,this.vertices[i].z),t.max.x=Math.max(t.max.x,this.vertices[i].x),t.max.y=Math.max(t.max.y,this.vertices[i].y),t.max.z=Math.max(t.max.z,this.vertices[i].z)},o.ConvexShape.prototype.computeVolume=function(){var t={point:new o.Vector3},i=new Float32Array(6),e=function(t,o,e){var s=t+o,n=t*t,a=n+o*s;i[0]=s+e,i[1]=a+e*i[0],i[2]=t*n+o*a+e*i[1],i[3]=i[1]+t*(i[0]+t),i[4]=i[1]+o*(i[0]+o),i[5]=i[1]+e*(i[0]+e)};return function(o){for(var s=0;s<o.length;s++){var n=o[s],a=n.a.point,r=n.b.point,c=n.c.point,h=r.x-a.x,l=r.y-a.y,p=r.z-a.z,_=c.x-a.x,b=c.y-a.y,u=c.z-a.z,f=l*u-b*p,d=_*p-h*u,m=h*b-_*l;e(a.x,r.x,c.x);var y=i[0],j=i[1],w=i[2],x=i[3],v=i[4],g=i[5];e(a.y,r.y,c.y);var V=(i[0],i[1]),z=i[2],B=i[3],C=i[4],S=i[5];e(a.z,r.z,c.z);var P=(i[0],i[1]),M=i[2],O=i[3],I=i[4],A=i[5],T=n.classifyVertex(t)>0?-1:1;this._integral[0]+=T*f*y,this._integral[1]+=T*f*j,this._integral[2]+=T*d*V,this._integral[3]+=T*m*P,this._integral[4]+=T*f*w,this._integral[5]+=T*d*z,this._integral[6]+=T*m*M,this._integral[7]+=T*f*(a.y*x+r.y*v+c.y*g),this._integral[8]+=T*d*(a.z*B+r.z*C+c.z*S),this._integral[9]+=T*m*(a.x*O+r.x*I+c.x*A)}this._integral[0]*=1/6,this._integral[1]*=1/24,this._integral[2]*=1/24,this._integral[3]*=1/24,this._integral[4]*=1/60,this._integral[5]*=1/60,this._integral[6]*=1/60,this._integral[7]*=1/120,this._integral[8]*=1/120,this._integral[9]*=1/120,this.volume=this._integral[0],this.center_of_mass.x=this._integral[1]/this.volume,this.center_of_mass.y=this._integral[2]/this.volume,this.center_of_mass.z=this._integral[3]/this.volume}}(),o.ConvexShape.prototype.getInertiaTensor=function(){return function(t){var i=new o.Matrix3;return t/=this.volume,i.e00=(this._integral[5]+this._integral[6])*t,i.e11=(this._integral[4]+this._integral[6])*t,i.e22=(this._integral[4]+this._integral[5])*t,i.e10=i.e01=-this._integral[7]*t,i.e21=i.e12=-this._integral[8]*t,i.e20=i.e02=-this._integral[9]*t,i.e00-=t*(this.center_of_mass.y*this.center_of_mass.y+this.center_of_mass.z*this.center_of_mass.z),i.e11-=t*(this.center_of_mass.x*this.center_of_mass.x+this.center_of_mass.z*this.center_of_mass.z),i.e22-=t*(this.center_of_mass.x*this.center_of_mass.x+this.center_of_mass.y*this.center_of_mass.y),i.e10+=t*this.center_of_mass.x*this.center_of_mass.y,i.e01+=t*this.center_of_mass.x*this.center_of_mass.y,i.e21+=t*this.center_of_mass.y*this.center_of_mass.z,i.e12+=t*this.center_of_mass.y*this.center_of_mass.z,i.e20+=t*this.center_of_mass.x*this.center_of_mass.z,i.e02+=t*this.center_of_mass.x*this.center_of_mass.z,i}}(),o.ConvexShape.prototype.findSupportPoint=function(t,i){for(var o,e,s=-(1/0),n=0;n<this.vertices.length;n++)e=this.vertices[n].dot(t),e>s&&(s=e,o=n);i.copy(this.vertices[o])},o.ConvexShape.prototype.rayIntersect=function(){{var t,i,e=new o.Vector3,s=new o.Vector3,n=new o.Vector3,a=new o.Vector3,r=new o.Vector3,c=new o.Vector3;new o.Vector3,new o.Vector3}return function(h,l){t=0,e.subtractVectors(l,h),i=e.length(),e.scale(1/i);for(var p=0;p<this.faces.length;p++){var _=this.faces[p];s.subtractVectors(_.b.point,_.a.point),n.subtractVectors(_.c.point,_.a.point),a.crossVectors(e,n);var b=s.dot(a);if(!(b<o.EPSILON)){var u=1/b;r.subtractVectors(h,_.a.point);var f=u*r.dot(a);if(!(0>f)){c.crossVectors(r,s);var d=u*e.dot(c);if(!(0>d||f+d>1)){var m=u*n.dot(c);if(!(t>m||m>i)){var y=o.ObjectPool.getObject("RayIntersection");return y.object=this,y.t=m,y.point.scaleVector(e,m),y.point.add(h),y.normal.copy(_.normal),y}}}}}return null}}(),o.CylinderShape=function(t,i){this.radius=t,this.half_height=i,this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.CylinderShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.z=-this.radius,t.min.y=-this.half_height,t.max.x=t.max.z=this.radius,t.max.y=this.half_height},o.CylinderShape.prototype.getInertiaTensor=function(t){var i=.0833*t*(3*this.radius*this.radius+(this.half_height+this.half_height)*(this.half_height+this.half_height));return new o.Matrix3(i,0,0,0,.5*t*this.radius*this.radius,0,0,0,i)},o.CylinderShape.prototype.findSupportPoint=function(t,i){if(i.y=t.y<0?-this.half_height:this.half_height,0===t.x&&0===t.z)i.x=i.z=0;else{var o=Math.sqrt(t.x*t.x+t.z*t.z),e=this.radius/o;i.x=e*t.x,i.z=e*t.z}},o.CylinderShape.prototype.rayIntersect=function(){var t=new o.Vector3,i=new o.Vector3;return function(e,s){t.y=this.half_height,i.y=-this.half_height;var n=new o.Vector3;n.subtractVectors(i,t);var a=new o.Vector3;a.subtractVectors(e,t);var r=new o.Vector3;r.subtractVectors(s,e);var c=a.dot(n),h=r.dot(n),l=n.dot(n);if(0>c&&0>c+h)return null;if(c>l&&c+h>l)return null;var p,_,b=r.dot(r),u=a.dot(r),f=l*b-h*h,d=a.dot(a)-this.radius*this.radius,m=l*d-c*c;if(Math.abs(f)<o.EPSILON){if(m>0)return null;p=0>c?-u/b:c>l?(h-u)/b:0}else{var y=l*u-h*c,j=y*y-f*m;if(0>j)return null;if(_=p=(-y-Math.sqrt(j))/f,0>c+p*h){if(0>=h)return null;if(p=-c/h,!(0>=d+p*(2*u+p*b)))return null;_=p}else if(c+p*h>l){if(h>=0)return null;if(p=(l-c)/h,!(0>=d+l-2*c+p*(2*(u-h)+p*b)))return null;_=p}if(p=_,0>p||p>1)return null}var w=o.ObjectPool.getObject("RayIntersection");return w.object=this,w.t=p*r.length(),w.point.scaleVector(r,p),w.point.add(e),Math.abs(w.point.y-this.half_height)<=o.EPSILON?(w.normal.x=w.normal.z=0,w.normal.y=w.point.y<0?-1:1):(w.normal.y=0,w.normal.x=w.point.x,w.normal.z=w.point.z,w.normal.scale(1/this.radius)),w}}(),o.MeshShape=function(t,i){this.vertices=t,this.triangles=[];for(var e=0;e<i.length;e+=3)this.triangles.push(new o.TriangleShape(t[i[e]],t[i[e+1]],t[i[e+2]]));this.volume=0,this.center_of_mass=new o.Vector3,this._integral=new Float32Array(10),this.hierarchy=new o.BVH(this.triangles).tree;var s=this.triangles.map(function(t){return new o.GjkEpa.Face(null,{point:t.a},{point:t.b},{point:t.c})});o.ConvexShape.prototype.computeVolume.call(this,s),this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.MeshShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=0,t.max.x=t.max.y=t.max.z=0;for(var i=0;i<this.vertices.length;i++)t.min.x=Math.min(t.min.x,this.vertices[i].x),t.min.y=Math.min(t.min.y,this.vertices[i].y),t.min.z=Math.min(t.min.z,this.vertices[i].z),t.max.x=Math.max(t.max.x,this.vertices[i].x),t.max.y=Math.max(t.max.y,this.vertices[i].y),t.max.z=Math.max(t.max.z,this.vertices[i].z)},o.MeshShape.prototype.getInertiaTensor=function(t){return o.ConvexShape.prototype.getInertiaTensor.call(this,t)},o.MeshShape.prototype.findSupportPoint=function(t,i){},o.MeshShape.prototype.rayIntersect=function(){var t=[],i=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};return function(o,e){var s,n=[this.hierarchy];t.length=0;for(var a=0;n.length>0;)if(a++,s=n.shift(),s.aabb.testRayIntersect(o,e))if(s.isLeaf()){var r=s.object.rayIntersect(o,e);null!=r&&t.push(r)}else n.push(s.left,s.right);return t.sort(i),t[0]||null}}(),o.PlaneShape=function(t,i,e){this.orientation=t,this.half_width=i,this.half_length=e,this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb),0===this.orientation?(this._half_width=0,this._half_height=this.half_width,this._half_depth=this.half_length):1===this.orientation?(this._half_width=this.half_width,this._half_height=0,this._half_depth=this.half_length):(this._half_width=this.half_width,this._half_height=this.half_length,this._half_depth=0)},o.PlaneShape.prototype.calculateLocalAABB=function(t){0===this.orientation?(this._half_width=0,this._half_height=this.half_width,this._half_depth=this.half_length,t.min.x=0,t.min.y=-this.half_width,t.min.z=-this.half_length,t.max.x=0,t.max.y=this.half_width,t.max.z=this.half_length):1===this.orientation?(this._half_width=this.half_width,this._half_height=0,this._half_depth=this.half_length,t.min.x=-this.half_width,t.min.y=0,t.min.z=-this.half_length,t.max.x=this.half_width,t.max.y=0,t.max.z=this.half_length):(this._half_width=this.half_width,this._half_height=this.half_length,this._half_depth=0,t.min.x=-this.half_width,t.min.y=-this.half_length,t.min.z=0,t.max.x=this.half_width,t.max.y=this.half_length,t.max.z=0)},o.PlaneShape.prototype.getInertiaTensor=function(t){var i=this.half_width*this.half_width*4,e=this.half_length*this.half_length*4,s=.0833*t,n=s*e,a=s*(i+e),r=s*i;return 0===this.orientation?new o.Matrix3(a,0,0,0,n,0,0,0,r):1===this.orientation?new o.Matrix3(n,0,0,0,a,0,0,0,r):new o.Matrix3(a,0,0,0,r,0,0,0,n)},o.PlaneShape.prototype.findSupportPoint=function(t,i){i.x=t.x<0?-this._half_width:this._half_width,i.y=t.y<0?-this._half_height:this._half_height,i.z=t.z<0?-this._half_depth:this._half_depth},o.PlaneShape.prototype.rayIntersect=function(){var t,i=new o.Vector3,e=new o.Vector3,s=new o.Vector3;return function(n,a){if(0===this.orientation?(i.x=1,i.y=i.z=0):1===this.orientation?(i.y=1,i.x=i.z=0):(i.z=1,i.x=i.y=0),e.subtractVectors(a,n),t=-i.dot(n)/i.dot(e),0>t||t>1)return null;if(s.scaleVector(e,t),s.add(n),s.x<-this._half_width||s.x>this._half_width)return null;if(s.y<-this._half_height||s.y>this._half_height)return null;if(s.z<-this._half_depth||s.z>this._half_depth)return null;var r=o.ObjectPool.getObject("RayIntersection");return r.object=this,r.t=t*e.length(),r.point.copy(s),r.normal.copy(i),r}}(),o.SphereShape=function(t){this.radius=t,this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.SphereShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=-this.radius,t.max.x=t.max.y=t.max.z=this.radius},o.SphereShape.prototype.getInertiaTensor=function(t){var i=.4*t*this.radius*this.radius;return new o.Matrix3(i,0,0,0,i,0,0,0,i)},o.SphereShape.prototype.findSupportPoint=function(){var t=new o.Vector3;return function(i,o){t.normalizeVector(i),o.scaleVector(t,this.radius)}}(),o.SphereShape.prototype.rayIntersect=function(){var t,i=new o.Vector3;return function(e,s){i.subtractVectors(s,e),t=i.length(),i.scale(1/t);var n=e.dot(i),a=e.dot(e)-this.radius*this.radius;if(n>=0&&a>=0)return null;var r=n*n-a;if(0>r)return null;var c=Math.sqrt(r),h=-n-c;if(0>h&&(h=-n+c),h>t)return null;var l=o.ObjectPool.getObject("RayIntersection");return l.object=this,l.point.scaleVector(i,h),l.t=h,l.point.add(e),l.normal.normalizeVector(l.point),l}}(),o.TriangleShape=function(t,i,n){this.a=t,this.b=i,this.c=n,this.normal=new o.Vector3,e.subtractVectors(this.b,this.a),s.subtractVectors(this.c,this.a),this.normal.crossVectors(e,s),this.volume=this.normal.length()/2,this.normal.normalize(),this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.TriangleShape.prototype.calculateLocalAABB=function(t){t.min.x=Math.min(this.a.x,this.b.x,this.c.x),t.min.y=Math.min(this.a.y,this.b.y,this.c.y),t.min.z=Math.min(this.a.z,this.b.z,this.c.z),t.max.x=Math.max(this.a.x,this.b.x,this.c.x),t.max.y=Math.max(this.a.y,this.b.y,this.c.y),t.max.z=Math.max(this.a.z,this.b.z,this.c.z)},o.TriangleShape.prototype.getInertiaTensor=function(t){return new o.Matrix3(0,0,0,0,0,0,0,0,0)},o.TriangleShape.prototype.classifyVertex=function(t){var i=this.normal.dot(this.a);return this.normal.dot(t)-i},o.TriangleShape.prototype.findSupportPoint=function(t,i){var o,e=-(1/0);o=t.dot(this.a),o>e&&(i.copy(this.a),e=o),o=t.dot(this.b),o>e&&(i.copy(this.b),e=o),o=t.dot(this.c),o>e&&i.copy(this.c)},o.TriangleShape.prototype.rayIntersect=function(){var t=new o.Vector3,i=new o.Vector3,e=new o.Vector3,s=new o.Vector3,n=new o.Vector3,a=new o.Vector3;return function(r,c){t.subtractVectors(this.b,this.a),i.subtractVectors(this.c,this.a),e.crossVectors(t,i),s.subtractVectors(c,r);var h=-s.dot(e);if(0>=h)return null;n.subtractVectors(r,this.a);var l=n.dot(e)/h;if(0>l||l>1)return null;a.crossVectors(n,s);var p=i.dot(a)/h,_=-t.dot(a)/h;if(p+_>1||0>p||0>_)return null;var b=o.ObjectPool.getObject("RayIntersection");return b.object=this,b.t=l*s.length(),b.point.scaleVector(s,l),b.point.add(r),b.normal.copy(this.normal),b}}(),o.CollisionUtils={},o.CollisionUtils.canBodiesCollide=function(t,i){if(t._mass===1/0&&i._mass===1/0)return!1;if(0!==t.collision_mask)if(0===(1&t.collision_mask)){if(0!==(t.collision_mask&i.collision_groups))return!1}else if(0===(t.collision_mask&i.collision_groups))return!1;if(0!==i.collision_mask)if(0===(1&i.collision_mask)){if(0!==(i.collision_mask&t.collision_groups))return!1}else if(0===(i.collision_mask&t.collision_groups))return!1;return!0},o.GeometryMethods={findClosestPointInTriangle:function(){var t=new o.Vector3,i=new o.Vector3,e=new o.Vector3;return function(o,s,n,a,r){var c;t.subtractVectors(n,s),i.subtractVectors(a,s),e.subtractVectors(o,s);var h=t.dot(e),l=i.dot(e);if(0>=h&&0>=l)return void r.copy(s);e.subtractVectors(o,n);var p=t.dot(e),_=i.dot(e);if(p>=0&&p>=_)return void r.copy(n);var b=h*_-p*l;if(0>=b&&h>=0&&0>=p)return c=h/(h-p),r.scaleVector(t,c),void r.add(s);e.subtractVectors(o,a);var u=t.dot(e),f=i.dot(e);if(f>=0&&f>=u)return void r.copy(a);var d,m=u*l-h*f;if(0>=m&&l>=0&&0>=f)return d=l/(l-f),r.scaleVector(i,d),void r.add(s);var y=p*f-u*_;if(0>=y&&_-p>=0&&u-f>=0)return d=(_-p)/(_-p+(u-f)),r.subtractVectors(a,n),r.scale(d),void r.add(n);var j=1/(y+m+b);c=m*j,d=b*j,t.scale(c),t.add(s),i.scale(d),r.addVectors(t,i)}}(),findBarycentricCoordinates:function(t,i,e,s,n){var a=new o.Vector3,r=new o.Vector3,c=new o.Vector3;a.subtractVectors(e,i),r.subtractVectors(s,i),c.subtractVectors(t,i);var h=a.dot(a),l=a.dot(r),p=r.dot(r),_=c.dot(a),b=c.dot(r),u=h*p-l*l;n.y=(p*_-l*b)/u,n.z=(h*b-l*_)/u,n.x=1-n.y-n.z},findSquaredDistanceFromSegment:function(){var t=new o.Vector3,i=new o.Vector3,e=new o.Vector3;return function(o,s,n){t.subtractVectors(s,n),i.subtractVectors(s,o),e.subtractVectors(n,o);var a=i.dot(t);if(0>=a)return i.dot(i);var r=t.dot(t);return a>=r?e.dot(e):i.dot(i)-a*a/r}}(),findClosestPointsOnSegments:function(){var t=new o.Vector3,i=new o.Vector3,s=new o.Vector3,n=function(t,i,o){return Math.min(Math.max(t,i),o)};return function(a,r,c,h,l,p){t.subtractVectors(r,a),i.subtractVectors(h,c),s.subtractVectors(a,c);var _,b,u=t.dot(t),f=i.dot(i),d=i.dot(s);if(u<=o.EPSILON&&f<=o.EPSILON)return _=b=0,l.copy(a),p.copy(c),e.subtractVectors(l,p),e.dot(e);if(u<=o.EPSILON)_=0,b=d/f,b=n(b,0,1);else{var m=t.dot(s);if(f<=o.EPSILON)b=0,_=n(-m/u,0,1);else{var y=t.dot(i),j=u*f-y*y;_=0!==j?n((y*d-m*f)/j,0,1):0,b=(y*_+d)/f,0>b?(b=0,_=n(-m/u,0,1)):b>1&&(b=1,_=n((y-m)/u,0,1))}}return l.scaleVector(t,_),l.add(a),p.scaleVector(i,b),p.add(c),e.subtractVectors(l,p),e.dot(e)}}()},function(){o.MinHeap=function(t){this.heap=null==t?[]:t.slice(),this.heap.length>0&&this.heapify()},o.MinHeap.prototype={heapify:function(){for(var t=~~((this.heap.length-2)/2);t>=0;)this.siftUp(t,this.heap.length-1),t--},siftUp:function(t,i){for(var o=t;i>=2*o+1;){var e=2*o+1;if(i>=e+1&&this.heap[e+1].valueOf()<this.heap[e].valueOf()&&e++,!(this.heap[e].valueOf()<this.heap[o].valueOf()))return;var s=this.heap[e];this.heap[e]=this.heap[o],this.heap[o]=s,o=e}},push:function(t){this.heap.push(t);for(var i=this.heap.length-1;0!==i;){var o=~~((i-1)/2);if(this.heap[o].valueOf()>this.heap[i].valueOf()){var e=this.heap[o];this.heap[o]=this.heap[i],this.heap[i]=e}i=o}},peek:function(){return this.heap.length>0?this.heap[0]:null},pop:function(){var t=this.heap[0];return this.heap[0]=this.heap[this.heap.length-1],this.heap.length=this.heap.length-1,this.siftUp(0,this.heap.length-1),t}}}(),o.Utility={getUid:function(){var t=0;return function(){return t++}}()},o.LineSweptShape=function(t,i,e){this.start=t,this.end=i,this.shape=e,this.direction=new o.Vector3,this.direction.subtractVectors(i,t),this.length=this.direction.length(),this.direction.normalize(),this.aabb=new o.AABB,this.calculateLocalAABB(this.aabb)},o.LineSweptShape.prototype.calculateLocalAABB=function(t){this.shape.calculateLocalAABB(t),t.min.x=Math.min(t.min.x+this.start.x,t.min.x+this.end.x),t.min.y=Math.min(t.min.y+this.start.y,t.min.y+this.end.y),t.min.z=Math.min(t.min.z+this.start.z,t.min.z+this.end.z),t.max.x=Math.max(t.max.x+this.start.x,t.max.x+this.end.x),t.max.y=Math.max(t.max.y+this.start.y,t.max.y+this.end.y),t.max.z=Math.max(t.max.z+this.start.z,t.max.z+this.end.z)},o.LineSweptShape.prototype.getInertiaTensor=function(t){return this.shape.getInertiaTensor(t)},o.LineSweptShape.prototype.findSupportPoint=function(t,i){this.shape.findSupportPoint(t,i);var o=this.direction.dot(t);i.add(0>o?this.start:this.end)},o.LineSweptShape.prototype.rayIntersect=function(){return null},o.AABB=function(t,i){this.min=t||new o.Vector3,this.max=i||new o.Vector3},o.AABB.prototype.copy=function(t){this.min.x=t.min.x,this.min.y=t.min.y,this.min.z=t.min.z,this.max.x=t.max.x,this.max.y=t.max.y,this.max.z=t.max.z},o.AABB.prototype.combineAABBs=function(t,i){this.min.x=Math.min(t.min.x,i.min.x),this.min.y=Math.min(t.min.y,i.min.y),this.min.z=Math.min(t.min.z,i.min.z),this.max.x=Math.max(t.max.x,i.max.x),this.max.y=Math.max(t.max.y,i.max.y),this.max.z=Math.max(t.max.z,i.max.z)},o.AABB.prototype.transform=function(){var t=new o.Vector3,i=new o.Vector3,s=new o.Vector3,n=new o.Vector3,a=new o.Matrix3;return function(o,r){t.subtractVectors(o.max,o.min),t.scale(.5),i.addVectors(o.max,o.min),i.scale(.5),r.transformVector3Into(i,s),a.e00=Math.abs(r.e00),a.e01=Math.abs(r.e01),a.e02=Math.abs(r.e02),a.e10=Math.abs(r.e10),a.e11=Math.abs(r.e11),a.e12=Math.abs(r.e12),a.e20=Math.abs(r.e20),a.e21=Math.abs(r.e21),a.e22=Math.abs(r.e22),e.x=a.e00,e.y=a.e10,e.z=a.e20,n.x=t.dot(e),e.x=a.e01,e.y=a.e11,e.z=a.e21,n.y=t.dot(e),e.x=a.e02,e.y=a.e12,e.z=a.e22,n.z=t.dot(e),this.min.subtractVectors(s,n),this.max.addVectors(s,n)}}(),o.AABB.prototype.intersects=function(t){return this.max.x<t.min.x||this.max.y<t.min.y||this.max.z<t.min.z||this.min.x>t.max.x||this.min.y>t.max.y||this.min.z>t.max.z?!1:!0},o.AABB.prototype.testRayIntersect=function(){var t,i,e,s,n,a=new o.Vector3;return function(r,c){t=0,a.subtractVectors(c,r),i=a.length(),a.scale(1/i);var h,l;if(h=this.min.x,l=this.max.x,Math.abs(a.x)<o.EPSILON){if(r.x<h||r.x>l)return!1}else if(e=1/a.x,s=(h-r.x)*e,n=(l-r.x)*e,s>n&&(e=s,s=n,n=e),t=Math.max(t,s),i=Math.min(i,n),t>i)return!1;if(h=this.min.y,l=this.max.y,Math.abs(a.y)<o.EPSILON){if(r.y<h||r.y>l)return!1}else if(e=1/a.y,s=(h-r.y)*e,n=(l-r.y)*e,s>n&&(e=s,s=n,n=e),t=Math.max(t,s),i=Math.min(i,n),t>i)return!1;if(h=this.min.z,l=this.max.z,Math.abs(a.z)<o.EPSILON){if(r.z<h||r.z>l)return!1}else if(e=1/a.z,s=(h-r.z)*e,n=(l-r.z)*e,s>n&&(e=s,s=n,n=e),t=Math.max(t,s),i=Math.min(i,n),t>i)return!1;return!0}}(),function(){function t(t){var i=t.max.x-t.min.x,o=t.max.y-t.min.y,e=t.max.z-t.min.z;return i*(o+e)+o*e}var i=function(t){this.aabb=new o.AABB,this.area=0,this.parent=null,this.left=null,this.right=null,this.morton=null,this.object=t||null};i.prototype={isLeaf:function(){return null!=this.object},computeBounds:function(i){this.isLeaf()?this.aabb.copy(this.object.aabb):this.aabb.combineAABBs(this.left.aabb,this.right.aabb),this.area=t(this.aabb)},valueOf:function(){return this.area}};var e=function(){function e(t){return t=4278190335&(t^t<<16),t=50393103&(t^t<<8),t=51130563&(t^t<<4),t=153391689&(t^t<<2)}function s(t,i,o){return(e(o)<<2)+(e(i)<<1)+e(t)}var n=new o.AABB,a=function(t,i){for(var o=t.max.x-t.min.x,e=t.max.y-t.min.y,n=t.max.z-t.min.z,r=512,c=r/o,h=r/e,l=r/n,p=0;p<i.length;p++){var _=i[p],b=(_.aabb.max.x-_.aabb.min.x)/2+_.aabb.min.x,u=(_.aabb.max.y-_.aabb.min.y)/2+_.aabb.min.y,f=(_.aabb.max.z-_.aabb.min.z)/2+_.aabb.min.z;_.morton=s((b+t.min.x)*c,(u+t.min.y)*h,(f+t.min.z)*l)}i.sort(a.mortonSort);var d=a.buildTree(i,29);return a.combineCluster(d,1),d};return a.mortonSort=function(t,i){return t.morton<i.morton?-1:t.morton>i.morton?1:0},a.clusterReductionCount=function(t){var i=Math.pow(t,.5)/2,o=.5;return Math.max(i*Math.pow(t,o),1)},a.buildTree=function(t,i){var o=[];if(t.length<a.max_bucket_size)o.push.apply(o,t),a.combineCluster(o,a.clusterReductionCount(a.max_bucket_size));else{var e=[],s=[];if(1>i)e=t.slice(0,t.length/2),s=t.slice(t.length/2);else for(var n=1<<i,r=0;r<t.length;r++){var c=t[r];c.morton&n?s.push(c):e.push(c)}o.push.apply(o,a.buildTree(e,i-1)),o.push.apply(o,a.buildTree(s,i-1)),a.combineCluster(o,a.clusterReductionCount(o.length))}return o},a.combineCluster=function(t,e){if(t.length<=1)return t;for(var s,n=new o.MinHeap,r=0;r<t.length;r++)s=new i,s.left=t[r],s.right=a.findBestMatch(t,t[r]),s.computeBounds(),n.push(s);for(var c;t.length>e;)for(c=n.pop(),t.splice(t.indexOf(c.left),1),t.splice(t.indexOf(c.right),1),t.push(c),n.heap.length=0,r=0;r<t.length;r++)s=new i,s.left=t[r],s.right=a.findBestMatch(t,t[r]),s.computeBounds(),n.push(s)},a.findBestMatch=function(i,o){for(var e,s=1/0,a=0,r=0;r<i.length;r++)i[r]!==o&&(n.combineAABBs(o.aabb,i[r].aabb),e=t(n),s>e&&(s=e,a=r));return i[a]},a.max_bucket_size=20,a}();o.BVH=function(t){for(var s=[],n=new o.AABB,a=0;a<t.length;a++){n.combineAABBs(n,t[a].aabb);var r=new i(t[a]);r.computeBounds(),s.push(r)}this.tree=e(n,s)[0]},o.BVH.AAC=e}(),o.ContactDetails=function(){this.uid=o.Utility.getUid(),this.object_a=null,this.object_b=null,this.contact_point=new o.Vector3,this.contact_point_in_a=new o.Vector3,this.contact_point_in_b=new o.Vector3,this.contact_normal=new o.Vector3,this.penetration_depth=0,this.restitution=0,this.friction=0,this.listeners={}},o.EventEmitter.apply(o.ContactDetails),o.ContactDetails.prototype.destroy=function(){this.emit("destroy"),o.ObjectPool.freeObject("ContactDetails",this)},o.ContactManifold=function(){this.object_a=null,this.object_b=null,this.points=[],this.next_manifold=null},o.ContactManifold.prototype.findWeakestContact=function(t){var i,o,n=-1,a=t.penetration_depth;for(i=0;4>i;i++)o=this.points[i],o.penetration_depth>a&&(a=o.penetration_depth,n=i);var r=0,c=0,h=0,l=0;0!==n&&(e.subtractVectors(t.contact_point_in_a,this.points[1].contact_point_in_a),s.subtractVectors(this.points[3].contact_point_in_a,this.points[2].contact_point_in_a),e.cross(s),r=e.lengthSquared()),1!==n&&(e.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),s.subtractVectors(this.points[3].contact_point_in_a,this.points[2].contact_point_in_a),e.cross(s),c=e.lengthSquared()),2!==n&&(e.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),s.subtractVectors(this.points[3].contact_point_in_a,this.points[1].contact_point_in_a),e.cross(s),h=e.lengthSquared()),3!==n&&(e.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),s.subtractVectors(this.points[2].contact_point_in_a,this.points[1].contact_point_in_a),e.cross(s),l=e.lengthSquared());var p=0,_=r;return c>_&&(p=1,_=c),h>_&&(p=2,_=h),l>_&&(p=3),p},o.ContactManifold.prototype.addContact=function(t){var i;for(i=0;i<this.points.length;i++)if(this.points[i].contact_point.distanceTo(t.contact_point)<=.02)return void t.destroy();var o=!1;if(null!=t){if(o=t.object_a.emit("speculativeContact",t.object_b,t),o!==!1&&(o=t.object_b.emit("speculativeContact",t.object_a,t)),o===!1)return void t.destroy();t.object_a.emit("contact",t.object_b,t),t.object_b.emit("contact",t.object_a,t)}if(this.points.length<4)this.points.push(t);else{var e=this.findWeakestContact(t);this.points[e].destroy(),this.points[e]=t}},o.ContactManifold.prototype.update=function(){var t,i,s,n=new o.Vector3,a=new o.Vector3,r=new o.Vector3,c=this.points.length;for(t=0;t<this.points.length;t++)if(s=this.points[t],s.object_a.transform.transformVector3Into(s.contact_point_in_a,n),s.object_b.transform.transformVector3Into(s.contact_point_in_b,a),s.contact_point.addVectors(n,a),s.contact_point.scale(.5),r.subtractVectors(n,a),s.penetration_depth=r.dot(s.contact_normal),s.penetration_depth<-.02){for(s.destroy(),i=t;i<this.points.length;i++)this.points[i]=this.points[i+1];this.points.length=this.points.length-1,this.object_a.emit("endContact",this.object_b),this.object_b.emit("endContact",this.object_a)}else{e.scaleVector(s.contact_normal,s.penetration_depth),e.subtractVectors(n,e),e.subtractVectors(a,e);var h=e.lengthSquared();if(h>.2*.2){for(s.destroy(),i=t;i<this.points.length;i++)this.points[i]=this.points[i+1];this.points.length=this.points.length-1,this.object_a.emit("endContact",this.object_b),this.object_b.emit("endContact",this.object_a)}}c>0&&0===this.points.length&&(this.object_a.emit("endAllContact",this.object_b),this.object_b.emit("endAllContact",this.object_a))},o.ContactManifoldList=function(){this.first=null},o.ContactManifoldList.prototype.insert=function(t){t.next_manifold=this.first,this.first=t},o.ContactManifoldList.prototype.getManifoldForObjects=function(t,i){var e=null;if(null!==this.first)for(var s=this.first;null!==s;){if(s.object_a===t&&s.object_b===i||s.object_a===i&&s.object_b===t){e=s;break}s=s.next_manifold}return null===e&&(e=o.ObjectPool.getObject("ContactManifold"),e.object_a=t,e.object_b=i,this.insert(e)),e},o.GhostBody=function(t){o.RigidBody.call(this,t,1/0),this.contacts=[],this.tick_contacts=[],this.addListener("speculativeContact",o.GhostBody.prototype.onSpeculativeContact)},o.GhostBody.prototype=Object.create(o.RigidBody.prototype),o.GhostBody.prototype.onSpeculativeContact=function(t,i){return this.tick_contacts.push(t),-1===this.contacts.indexOf(t)?(this.contacts.push(t),this.emit("contactStart",t,i),t.emit("contactStart",this,i)):(this.emit("contactContinue",t,i),t.emit("contactContinue",this,i)),!1},o.GhostBody.prototype.checkForEndedContacts=function(){for(var t=0;t<this.contacts.length;t++)-1===this.tick_contacts.indexOf(this.contacts[t])&&(this.emit("contactEnd",this.contacts[t]),this.contacts.splice(t,1),t-=1);this.tick_contacts.length=0},o.IterativeSolver=function(){this.existing_contact_ids={},this.contact_constraints=[],
	this.friction_constraints=[],this.all_constraints=[],this.constraints=[],this.max_iterations=10,this.penetrations_max_iterations=5,this.relaxation=.9,this.sor_weight=.85,this.warmstarting_factor=.95;var t=this;this.onContactDeactivate=function(){this.removeListener("deactivate",t.onContactDeactivate);var i=t.contact_constraints.indexOf(this);t.contact_constraints.splice(i,1),delete t.existing_contact_ids[this.contact.uid]},this.onFrictionDeactivate=function(){this.removeListener("deactivate",t.onFrictionDeactivate);var i=t.friction_constraints.indexOf(this);t.friction_constraints.splice(i,1)}},o.IterativeSolver.prototype.addConstraint=function(t){-1===this.constraints.indexOf(t)&&this.constraints.push(t)},o.IterativeSolver.prototype.removeConstraint=function(t){var i=this.constraints.indexOf(t);-1!==i&&this.constraints.splice(i,1)},o.IterativeSolver.prototype.processContactManifolds=function(t){var i,e,s,n,a;for(e=t.first;e;){for(s=e.points.length,i=0;s>i;i++){n=e.points[i];var r=this.existing_contact_ids.hasOwnProperty(n.uid);r||(this.existing_contact_ids[n.uid]=!0,a=o.ObjectPool.getObject("ContactConstraint"),a.buildFromContact(n),this.contact_constraints.push(a),a.addListener("deactivate",this.onContactDeactivate),a=o.ObjectPool.getObject("FrictionConstraint"),a.buildFromContact(n),this.friction_constraints.push(a),a.addListener("deactivate",this.onFrictionDeactivate))}e=e.next_manifold}this.all_constraints.length=0,Array.prototype.push.apply(this.all_constraints,this.friction_constraints),Array.prototype.push.apply(this.all_constraints,this.constraints),Array.prototype.push.apply(this.all_constraints,this.contact_constraints)},o.IterativeSolver.prototype.prepareConstraints=function(t){var i,o,e,s,n=this.all_constraints.length;for(e=0;n>e;e++)if(i=this.all_constraints[e],i.active!==!1)for(i.update(t),s=0;s<i.rows.length;s++)o=i.rows[s],o.multiplier=0,o.computeB(i),o.computeD(),o.computeEta(i,t)},o.IterativeSolver.prototype.resolveContacts=function(){var t,i,s,n,a,c,h,l=0;for(t=0;t<this.penetrations_max_iterations;t++){for(l=0,a=0;a<this.contact_constraints.length;a++){i=this.contact_constraints[a],n=i.rows[0],s=0,null!=i.object_a&&i.object_a._mass!==1/0&&(s+=n.jacobian[0]*i.object_a.linear_factor.x*i.object_a.push_velocity.x+n.jacobian[1]*i.object_a.linear_factor.y*i.object_a.push_velocity.y+n.jacobian[2]*i.object_a.linear_factor.z*i.object_a.push_velocity.z+n.jacobian[3]*i.object_a.angular_factor.x*i.object_a.turn_velocity.x+n.jacobian[4]*i.object_a.angular_factor.y*i.object_a.turn_velocity.y+n.jacobian[5]*i.object_a.angular_factor.z*i.object_a.turn_velocity.z),null!=i.object_b&&i.object_b._mass!==1/0&&(s+=n.jacobian[6]*i.object_b.linear_factor.x*i.object_b.push_velocity.x+n.jacobian[7]*i.object_b.linear_factor.y*i.object_b.push_velocity.y+n.jacobian[8]*i.object_b.linear_factor.z*i.object_b.push_velocity.z+n.jacobian[9]*i.object_b.angular_factor.x*i.object_b.turn_velocity.x+n.jacobian[10]*i.object_b.angular_factor.y*i.object_b.turn_velocity.y+n.jacobian[11]*i.object_b.angular_factor.z*i.object_b.turn_velocity.z),c=(i.contact.penetration_depth-s)/n.D||0;var p=n.multiplier;n.multiplier=Math.max(n.lower_limit,Math.min(p+c,n.upper_limit)),c=n.multiplier-p,l=Math.max(l,c),i.object_a&&i.object_a._mass!==1/0&&(i.object_a.push_velocity.x+=c*n.B[0],i.object_a.push_velocity.y+=c*n.B[1],i.object_a.push_velocity.z+=c*n.B[2],i.object_a.turn_velocity.x+=c*n.B[3],i.object_a.turn_velocity.y+=c*n.B[4],i.object_a.turn_velocity.z+=c*n.B[5]),i.object_b&&i.object_b._mass!==1/0&&(i.object_b.push_velocity.x+=c*n.B[6],i.object_b.push_velocity.y+=c*n.B[7],i.object_b.push_velocity.z+=c*n.B[8],i.object_b.turn_velocity.x+=c*n.B[9],i.object_b.turn_velocity.y+=c*n.B[10],i.object_b.turn_velocity.z+=c*n.B[11])}if(l>=-o.EPSILON&&l<=o.EPSILON)break}for(a=0;a<this.contact_constraints.length;a++)i=this.contact_constraints[a],n=i.rows[0],null!=i.object_a&&i.object_a._mass!==1/0&&(h=i.object_a._mass_inverted,i.object_a.position.x+=h*n.jacobian[0]*i.object_a.linear_factor.x*n.multiplier*this.relaxation,i.object_a.position.y+=h*n.jacobian[1]*i.object_a.linear_factor.y*n.multiplier*this.relaxation,i.object_a.position.z+=h*n.jacobian[2]*i.object_a.linear_factor.z*n.multiplier*this.relaxation,e.x=n.jacobian[3]*i.object_a.angular_factor.x*n.multiplier*this.relaxation,e.y=n.jacobian[4]*i.object_a.angular_factor.y*n.multiplier*this.relaxation,e.z=n.jacobian[5]*i.object_a.angular_factor.z*n.multiplier*this.relaxation,i.object_a.inverseInertiaTensorWorldFrame.transformVector3(e),r.x=e.x,r.y=e.y,r.z=e.z,r.w=0,r.multiply(i.object_a.rotation),i.object_a.rotation.x+=.5*r.x,i.object_a.rotation.y+=.5*r.y,i.object_a.rotation.z+=.5*r.z,i.object_a.rotation.w+=.5*r.w,i.object_a.rotation.normalize()),null!=i.object_b&&i.object_b._mass!==1/0&&(h=i.object_b._mass_inverted,i.object_b.position.x+=h*n.jacobian[6]*i.object_b.linear_factor.x*n.multiplier*this.relaxation,i.object_b.position.y+=h*n.jacobian[7]*i.object_b.linear_factor.y*n.multiplier*this.relaxation,i.object_b.position.z+=h*n.jacobian[8]*i.object_b.linear_factor.z*n.multiplier*this.relaxation,e.x=n.jacobian[9]*i.object_b.angular_factor.x*n.multiplier*this.relaxation,e.y=n.jacobian[10]*i.object_b.angular_factor.y*n.multiplier*this.relaxation,e.z=n.jacobian[11]*i.object_b.angular_factor.z*n.multiplier*this.relaxation,i.object_b.inverseInertiaTensorWorldFrame.transformVector3(e),r.x=e.x,r.y=e.y,r.z=e.z,r.w=0,r.multiply(i.object_b.rotation),i.object_b.rotation.x+=.5*r.x,i.object_b.rotation.y+=.5*r.y,i.object_b.rotation.z+=.5*r.z,i.object_b.rotation.w+=.5*r.w,i.object_b.rotation.normalize()),n.multiplier=0},o.IterativeSolver.prototype.solveConstraints=function(){var t,i,o,e,s,n,a,r,c,h=this.all_constraints.length,l=0;for(s=0;h>s;s++)if(t=this.all_constraints[s],t.active!==!1)for(n=0;n<t.rows.length;n++)o=t.rows[n],e=o.multiplier_cached*this.warmstarting_factor,o.multiplier=e,t.object_a&&t.object_a._mass!==1/0&&(t.object_a.solver_impulse[0]+=e*o.B[0],t.object_a.solver_impulse[1]+=e*o.B[1],t.object_a.solver_impulse[2]+=e*o.B[2],t.object_a.solver_impulse[3]+=e*o.B[3],t.object_a.solver_impulse[4]+=e*o.B[4],t.object_a.solver_impulse[5]+=e*o.B[5]),t.object_b&&t.object_b._mass!==1/0&&(t.object_b.solver_impulse[0]+=e*o.B[6],t.object_b.solver_impulse[1]+=e*o.B[7],t.object_b.solver_impulse[2]+=e*o.B[8],t.object_b.solver_impulse[3]+=e*o.B[9],t.object_b.solver_impulse[4]+=e*o.B[10],t.object_b.solver_impulse[5]+=e*o.B[11]);for(a=0;a<this.max_iterations;a++){for(l=0,s=0;h>s;s++)if(t=this.all_constraints[s],t.active!==!1)for(i=t.rows.length,n=0;i>n;n++){o=t.rows[n],c=0,null!=t.object_a&&t.object_a._mass!==1/0&&(c+=o.jacobian[0]*t.object_a.linear_factor.x*t.object_a.solver_impulse[0]+o.jacobian[1]*t.object_a.linear_factor.y*t.object_a.solver_impulse[1]+o.jacobian[2]*t.object_a.linear_factor.z*t.object_a.solver_impulse[2]+o.jacobian[3]*t.object_a.angular_factor.x*t.object_a.solver_impulse[3]+o.jacobian[4]*t.object_a.angular_factor.y*t.object_a.solver_impulse[4]+o.jacobian[5]*t.object_a.angular_factor.z*t.object_a.solver_impulse[5]),null!=t.object_b&&t.object_b._mass!==1/0&&(c+=o.jacobian[6]*t.object_b.linear_factor.x*t.object_b.solver_impulse[0]+o.jacobian[7]*t.object_b.linear_factor.y*t.object_b.solver_impulse[1]+o.jacobian[8]*t.object_b.linear_factor.z*t.object_b.solver_impulse[2]+o.jacobian[9]*t.object_b.angular_factor.x*t.object_b.solver_impulse[3]+o.jacobian[10]*t.object_b.angular_factor.y*t.object_b.solver_impulse[4]+o.jacobian[11]*t.object_b.angular_factor.z*t.object_b.solver_impulse[5]),r=((o.eta-c)/o.D||0)*t.factor;var p=o.multiplier,_=p+r;_=this.sor_weight*_+(1-this.sor_weight)*p,o.multiplier=Math.max(o.lower_limit,Math.min(_,o.upper_limit)),r=o.multiplier-p;var b=(t.object_a&&t.object_a._mass!==1/0?t.object_a._mass:0)+(t.object_b&&t.object_b._mass!==1/0?t.object_b._mass:0);l=Math.max(l,Math.abs(r)/b),t.object_a&&t.object_a._mass!==1/0&&(t.object_a.solver_impulse[0]+=r*o.B[0],t.object_a.solver_impulse[1]+=r*o.B[1],t.object_a.solver_impulse[2]+=r*o.B[2],t.object_a.solver_impulse[3]+=r*o.B[3],t.object_a.solver_impulse[4]+=r*o.B[4],t.object_a.solver_impulse[5]+=r*o.B[5]),t.object_b&&t.object_b._mass!==1/0&&(t.object_b.solver_impulse[0]+=r*o.B[6],t.object_b.solver_impulse[1]+=r*o.B[7],t.object_b.solver_impulse[2]+=r*o.B[8],t.object_b.solver_impulse[3]+=r*o.B[9],t.object_b.solver_impulse[4]+=r*o.B[10],t.object_b.solver_impulse[5]+=r*o.B[11])}if(.1>=l)break}},o.IterativeSolver.prototype.applyConstraints=function(t){var i,o,n,a,r,c,h=this.all_constraints.length;for(a=0;h>a;a++)if(i=this.all_constraints[a],i.active!==!1){for(o=i.rows.length,i.last_impulse.x=i.last_impulse.y=i.last_impulse.z=0,r=0;o>r;r++)n=i.rows[r],n.multiplier_cached=n.multiplier,null!=i.object_a&&i.object_a._mass!==1/0&&(c=i.object_a._mass_inverted,s.x=c*t*n.jacobian[0]*i.object_a.linear_factor.x*n.multiplier,s.y=c*t*n.jacobian[1]*i.object_a.linear_factor.y*n.multiplier,s.z=c*t*n.jacobian[2]*i.object_a.linear_factor.z*n.multiplier,i.object_a.linear_velocity.add(s),i.last_impulse.add(s),e.x=t*n.jacobian[3]*i.object_a.angular_factor.x*n.multiplier,e.y=t*n.jacobian[4]*i.object_a.angular_factor.y*n.multiplier,e.z=t*n.jacobian[5]*i.object_a.angular_factor.z*n.multiplier,i.object_a.inverseInertiaTensorWorldFrame.transformVector3(e),i.object_a.angular_velocity.add(e),i.last_impulse.add(e)),null!=i.object_b&&i.object_b._mass!==1/0&&(c=i.object_b._mass_inverted,s.x=c*t*n.jacobian[6]*i.object_b.linear_factor.x*n.multiplier,s.y=c*t*n.jacobian[7]*i.object_b.linear_factor.y*n.multiplier,s.z=c*t*n.jacobian[8]*i.object_b.linear_factor.z*n.multiplier,i.object_b.linear_velocity.add(s),i.last_impulse.add(s),e.x=t*n.jacobian[9]*i.object_b.angular_factor.x*n.multiplier,e.y=t*n.jacobian[10]*i.object_b.angular_factor.y*n.multiplier,e.z=t*n.jacobian[11]*i.object_b.angular_factor.z*n.multiplier,i.object_b.inverseInertiaTensorWorldFrame.transformVector3(e),i.object_b.angular_velocity.add(e),i.last_impulse.add(e));i.breaking_threshold>0&&i.last_impulse.lengthSquared()>=i.breaking_threshold*i.breaking_threshold&&(i.active=!1)}},o.NarrowPhase=function(){this.contact_manifolds=new o.ContactManifoldList},o.NarrowPhase.prototype.updateContactManifolds=function(){for(var t=this.contact_manifolds.first,i=null;null!==t;)t.update(),0===t.points.length?(o.ObjectPool.freeObject("ContactManifold",t),null==i?this.contact_manifolds.first=t.next_manifold:i.next_manifold=t.next_manifold,t=t.next_manifold):(i=t,t=t.next_manifold)},o.NarrowPhase.prototype.midPhase=function(t,i){var e,s;t.shape instanceof o.CompoundShape?(e=t,s=i):(e=i,s=t);for(var n,a,r=o.ObjectPool.getObject("RigidBodyProxy"),c=0;c<e.shape.child_shapes.length;c++)if(n=e.shape.child_shapes[c],r.setFrom(e,n),r.shape instanceof o.CompoundShape||s.shape instanceof o.CompoundShape)this.midPhase(r,s);else if(a=this.getContact(r,s),null!=a){var h,l;if(a.object_a===r?(a.object_a=e,h=r,l=s):(a.object_b=e,h=s,l=r),h instanceof o.RigidBodyProxy)for(;h.parent;)h instanceof o.RigidBodyProxy&&h.shape_data.transform.transformVector3(a.contact_point_in_a),h=h.parent;if(l instanceof o.RigidBodyProxy)for(;l.parent;)l instanceof o.RigidBodyProxy&&l.shape_data.transform.transformVector3(a.contact_point_in_b),l=l.parent;a.object_a=h,a.object_b=l,this.addContact(h,l,a)}o.ObjectPool.freeObject("RigidBodyProxy",r)},o.NarrowPhase.prototype.meshCollision=function(){function t(t,i,l){n.copy(t.transform_inverse),n.multiply(i.transform);for(var p=[t.shape.hierarchy,i.shape.hierarchy];p.length;){var _=p.shift(),b=p.shift();if(_.isLeaf()&&b.isLeaf()){n.transformVector3Into(b.object.a,a.a),n.transformVector3Into(b.object.b,a.b),n.transformVector3Into(b.object.c,a.c),e.subtractVectors(a.b,a.a),s.subtractVectors(a.c,a.a),a.normal.crossVectors(e,s),a.normal.normalize();var u=o.TriangleTriangle(_.object,a);null!=u&&(t.transform.rotateVector3(u.contact_normal),t.transform.transformVector3(u.contact_point),t.transform.transformVector3(u.contact_point_in_b),i.transform_inverse.transformVector3(u.contact_point_in_b),u.object_a=t,u.object_b=i,u.restitution=(t.restitution+i.restitution)/2,u.friction=(t.friction+i.friction)/2,l(t,i,u))}else _.isLeaf()?(h.transform(b.left.aabb,n),_.aabb.intersects(h)&&p.push(_,b.left),c.transform(b.right.aabb,n),_.aabb.intersects(c)&&p.push(_,b.right)):b.isLeaf()?(r.transform(b.aabb,n),r.intersects(_.left.aabb)&&p.push(_.left,b),r.intersects(_.right.aabb)&&p.push(_.right,b)):(h.transform(b.left.aabb,n),c.transform(b.right.aabb,n),_.left.aabb.intersects(h)&&p.push(_.left,b.left),_.left.aabb.intersects(c)&&p.push(_.left,b.right),_.right.aabb.intersects(h)&&p.push(_.right,b.left),_.right.aabb.intersects(c)&&p.push(_.right,b.right))}}function i(t,i,e){var s=o.ObjectPool.getObject("RigidBodyProxy"),n=new o.CompoundShapeChild(t,new o.Vector3,new o.Quaternion);s.setFrom(i,n);var a,r=o.GjkEpa.GJK(s,e);return null!=o.GjkEpa.result?a=o.GjkEpa.result:null!=r&&(a=o.GjkEpa.EPA(r)),o.ObjectPool.freeObject("RigidBodyProxy",s),a}var n=new o.Matrix4,a=new o.TriangleShape(new o.Vector3,new o.Vector3,new o.Vector3),r=new o.AABB,c=new o.AABB,h=new o.AABB,l=function(){var t=new o.Matrix4,e=new o.AABB;return function(o,s,n){t.copy(s.transform),t.multiply(o.transform_inverse),e.transform(s.aabb,o.transform_inverse);for(var a,r=[o.shape.hierarchy];a=r.shift();)if(a.aabb.intersects(e))if(a.isLeaf()){var c=i(a.object,o,s);if(null!=c){for(var h=o;null!=h.parent;)h=h.parent;c.object_a=h,n(h,s,c)}}else r.push(a.left,a.right)}}();return function(i,e){var s=i.shape instanceof o.MeshShape,n=e.shape instanceof o.MeshShape;s&&n?t(i,e,this.addContact.bind(this)):s?l(i,e,this.addContact.bind(this)):l(e,i,this.addContact.bind(this))}}(),o.NarrowPhase.prototype.getContact=function(t,i){if(t.shape instanceof o.CompoundShape||i.shape instanceof o.CompoundShape)return void this.midPhase(t,i);if(t.shape instanceof o.MeshShape||i.shape instanceof o.MeshShape)return void this.meshCollision(t,i);var e;if(t.shape instanceof o.SphereShape&&i.shape instanceof o.SphereShape)e=o.SphereSphere(t,i);else if(t.shape instanceof o.SphereShape&&i.shape instanceof o.BoxShape||t.shape instanceof o.BoxShape&&i.shape instanceof o.SphereShape)e=o.BoxSphere(t,i);else{var s=o.GjkEpa.GJK(t,i);null!=o.GjkEpa.result?e=o.GjkEpa.result:null!=s&&(e=o.GjkEpa.EPA(s))}return e},o.NarrowPhase.prototype.addContact=function(t,i,o){this.contact_manifolds.getManifoldForObjects(t,i).addContact(o)},o.NarrowPhase.prototype.generateContacts=function(t){var i,o,e=t.length;for(this.updateContactManifolds(),i=0;e>i;i++)o=this.getContact(t[i][0],t[i][1]),null!=o&&this.addContact(t[i][0],t[i][1],o)},o.NarrowPhase.prototype.removeBody=function(t){for(var i=this.contact_manifolds.first;null!=i;){if(i.object_a===t||i.object_b===t){for(var o=0;o<i.points.length;o++)i.points[o].destroy();i.points.length=0}i=i.next}},o.ObjectPool={types:{},pools:{},registerType:function(t,i){this.types[t]=i,this.pools[t]=[]},getObject:function(t){var i=this.pools[t];return 0!==i.length?i.pop():this.types[t]()},freeObject:function(t,i){null!=i.removeAllListeners&&i.removeAllListeners(),this.pools[t].push(i)}},o.ObjectPool.registerType("ContactDetails",function(){return new o.ContactDetails}),o.ObjectPool.registerType("ContactManifold",function(){return new o.ContactManifold}),o.ObjectPool.registerType("GJK2SupportPoint",function(){return new o.GjkEpa.SupportPoint(new o.Vector3,new o.Vector3,new o.Vector3)}),o.ObjectPool.registerType("ConstraintRow",function(){return new o.ConstraintRow}),o.ObjectPool.registerType("ContactConstraint",function(){return new o.ContactConstraint}),o.ObjectPool.registerType("FrictionConstraint",function(){return new o.FrictionConstraint}),o.ObjectPool.registerType("RayIntersection",function(){return new o.RayIntersection}),o.ObjectPool.registerType("RigidBodyProxy",function(){return new o.RigidBodyProxy}),o.RigidBodyProxy=function(){this.parent=null,this.id=null,this.shape=null,this.aabb=new o.AABB,this._mass=null,this._mass_inverted=null,this.position=new o.Vector3,this.rotation=new o.Quaternion,this.transform=new o.Matrix4,this.transform_inverse=new o.Matrix4,this.restitution=null,this.friction=null},Object.defineProperty(o.RigidBodyProxy.prototype,"mass",{get:function(){return this._mass},set:function(t){this._mass=t,this._mass_inverted=1/t,this.inertiaTensor=this.shape.getInertiaTensor(t)}}),o.RigidBodyProxy.prototype.setFrom=function(t,i){this.parent=t,this.id=t.id,this.shape=i.shape,this.shape_data=i,this._mass=t._mass,t.transform.transformVector3Into(i.position,this.position),this.rotation.multiplyQuaternions(t.rotation,i.rotation),this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this.aabb.transform(this.shape.aabb,this.transform),this.restitution=t.restitution,this.friction=t.friction},o.RigidBodyProxy.prototype.findSupportPoint=o.RigidBody.prototype.findSupportPoint,o.RigidBodyProxy.prototype.getRigidBody=function(){for(var t=this.parent;t.parent;)t=this.parent;return t},o.World=function(t,i,e){this.ticks=0,this.broadphase=t,this.narrowphase=i,this.solver=e,e.world=this,this.rigid_bodies=[],this.ghost_bodies=[],this.gravity=new o.Vector3(0,-9.8,0),this.force_generators=[],this.listeners={}},o.EventEmitter.apply(o.World),o.World.prototype.step=function(t,i){i=i||t;var o,s,n,a,r,c;for(n=t/i,o=0;n>o;o++){for(this.ticks++,s=Math.min(i,t),t-=i,this.emit("stepStart",this.ticks,s),a=0,r=this.rigid_bodies.length;r>a;a++)c=this.rigid_bodies[a],c._mass!==1/0&&(e.scaleVector(c.gravity||this.gravity,c._mass*s),c.accumulated_force.add(e));for(a=0,r=this.force_generators.length;r>a;a++)this.force_generators[a].applyForce();for(a=0,r=this.rigid_bodies.length;r>a;a++)c=this.rigid_bodies[a],c.integrate(s);for(a=0,r=this.rigid_bodies.length;r>a;a++)this.rigid_bodies[a].updateDerived();for(this.broadphase.update(),this.narrowphase.generateContacts(this.broadphase.collision_pairs),this.solver.processContactManifolds(this.narrowphase.contact_manifolds),this.solver.prepareConstraints(s),this.solver.resolveContacts(),this.solver.solveConstraints(),this.solver.applyConstraints(s),a=0;a<this.ghost_bodies.length;a++)c=this.ghost_bodies[a],c.checkForEndedContacts();this.emit("stepEnd",this.ticks,s)}},o.World.prototype.addRigidBody=function(t){t.world=this,t.updateDerived(),this.rigid_bodies.push(t),this.broadphase.addBody(t)},o.World.prototype.removeRigidBody=function(t){var i;for(i=0;i<this.rigid_bodies.length;i++)if(this.rigid_bodies[i]===t){this.rigid_bodies.splice(i,1),this.broadphase.removeBody(t);break}this.narrowphase.removeBody(t)},o.World.prototype.addGhostBody=function(t){t.world=this,t.updateDerived(),this.ghost_bodies.push(t),this.broadphase.addBody(t)},o.World.prototype.removeGhostBody=function(t){for(var i=0;i<this.ghost_bodies.length;i++)if(this.ghost_bodies[i]===t){this.ghost_bodies.splice(i,1),this.broadphase.removeBody(t);break}},o.World.prototype.addForceGenerator=function(t){var i,o;for(i=0,o=this.force_generators.length;o>i;i++)if(this.force_generators[i]===t)return;this.force_generators.push(t)},o.World.prototype.removeForceGenerator=function(t){var i,o;for(i=0,o=this.force_generators.length;o>i;i++)if(this.force_generators[i]===t)return void this.force_generators.splice(i,1)},o.World.prototype.addConstraint=function(t){this.solver.addConstraint(t)},o.World.prototype.removeConstraint=function(t){this.solver.removeConstraint(t)},function(){var t=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};o.World.prototype.rayIntersect=function(i,o){var e=this.broadphase.rayIntersect(i,o);return e.sort(t),e},o.World.prototype.shapeIntersect=function(i,e,s){var n=new o.LineSweptShape(e,s,i),a=new o.RigidBody(n,0);a.updateDerived();for(var r=this.broadphase.intersectsWith(a),c=[],h=0;h<r.length;h++){var l=this.narrowphase.getContact(a,r[h]);if(null!=l){var p=o.ObjectPool.getObject("RayIntersection");p.object=l.object_b,p.normal.copy(l.contact_normal),p.point.scaleVector(l.contact_normal,-l.penetration_depth),p.point.add(l.contact_point),p.t=p.point.distanceTo(e),c.push(p)}}return c.sort(t),c}}(),"undefined"!=typeof window&&(window.Goblin=o),"undefined"!=typeof self&&(self.Goblin=o),"undefined"!=typeof module&&(module.exports=o)}();

	var Goblin = self.Goblin || _goblin;

	var _tmp_vector3_1 = new Goblin.Vector3();

	var MESSAGE_TYPES = {
		REPORTS: {
			/**
			 * world report containing matrix data for rigid bodies
			 * element [1] is how many simulation ticks have been processed (world.ticks)
			 * element [2] is number of rigid bodies in the array
			 * 2...n elements are the bodies' matrix data
			 */
			WORLD: 0,

			/**
			 * contains details for new contacts
			 * element [1] is the number of collisions, each collision is represented by:
			 * [object_a_id, object_b_id, world_contact_point{xyz}, contact_normal{xyz}, linear_velocity_delta{xyz}, angular_velocity_delta{xyz}, penetration_depth]
			 */
			COLLISIONS: 1,

			/**
			 * report containing information about existing constraints
			 * element [1] is how many constraints are being reported
			 * elements 2...n elements are the constraints' data
			 */
			CONSTRAINTS: 2
		},

		/**
		 * initializes the physics world
		 * [broadphase] String either 'sap' or 'naive' [default 'sap']
		 * [gravity] Object with float properties `x`, `y`, `z` [default {x:0, y:-9.8, z:0} ]
		 * [solver_max_iterations] Integer maximum iterations for the constraint solver [default 10]
		 */
		INITIALIZE: 'INITIALIZE',

		ADD_GHOSTBODY: 'ADD_GHOSTBODY',
		/**
		 * adds a ghost body to the world
		 * body_id Integer unique id for the body
		 * shape_description Object definition corresponding to the type of rigid body (see BODY_TYPES)
		 * collision_groups Integer body's collision groups
		 * collision_mask Integer body's collision mask
		 */

		/**
		 * adds a rigid body to the world
		 * body_id Integer unique id for the body
		 * shape_description Object definition corresponding to the type of rigid body (see BODY_TYPES)
		 * mass Float amount of mass the body has, 0 or Infinity creates a static object
		 * restitution Float body's restitution
		 * friction Float body's friction
		 * linear_damping Float body's linear damping
		 * angular_damping Float body's angular damping
		 * collision_groups Integer body's collision groups
		 * collision_mask Integer body's collision mask
		 */
		ADD_RIGIDBODY: 'ADD_RIGIDBODY',

		/**
		 * applys a force at a local location
		 * body_id Integer unique integer id for the body
		 * force Object force to apply to the body {x:x, y:y, z:z}
		 * local_location Object where, relative to the body, the force is applied {x:x, y:y, z:z}
		 */
		APPLY_FORCE: 'APPLY_FORCE',

		/**
		 * removes a constraint from the world
		 * constraint_id Integer unique id of the constraint
		 */
		REMOVE_COSNTRAINT: 'REMOVE_COSNTRAINT',

		/**
		 * removes a ghost body from the world
		 * body_id Integer unique id of the body
		 */
		REMOVE_GHOSTBODY: 'REMOVE_GHOSTBODY',

		/**
		 * removes a rigid body from the world
		 * body_id Integer unique id of the body
		 */
		REMOVE_RIGIDBODY: 'REMOVE_RIGIDBODY',

		/**
		 * sets a constraint's active flag
		 * constraint_id Integer unique id of the constraint
		 */
		SET_CONSTRAINT_ACTIVE: 'SET_CONSTRAINT_ACTIVE',

		/**
		 * sets a constraint's factor value
		 * constraint_id Integer unique id of the constraint
		 */
		SET_CONSTRAINT_FACTOR: 'SET_CONSTRAINT_FACTOR',

		/**
		 * sets a constraint's breaking threshold value
		 * constraint_id Integer unique id of the constraint
		 */
		SET_CONSTRAINT_BREAKING_THRESHOLD: 'SET_CONSTRAINT_BREAKING_THRESHOLD',

		/**
		 * sets a constraint's limit
		 * constraint_id Integer unique id of the constraint
		 * enabled Boolean whether or not the constraint is limited
		 * lower Float lower end of the constraint
		 * upper Float upper end of the constraint
		 */
		SET_CONSTRAINT_LIMIT: 'SET_CONSTRAINT_LIMIT',

		/**
		 * sets a constraint's motor
		 * constraint_id Integer unique id of the constraint
		 * enabled Boolean whether or not the constraint motor is enabled
		 * torque Float motor's torque
		 * max_speed Float motor's maximum speed
		 */
		SET_CONSTRAINT_MOTOR: 'SET_CONSTRAINT_MOTOR',

		/**
		 * sets the specified rigid body's mass
		 * body_id Integer unique integer id for the body
		 * mass Float new mass value
		 */
		SET_RIGIDBODY_MASS: 'SET_RIGIDBODY_MASS',

		/**
		 * sets the specified rigid body's restitution
		 * body_id Integer unique integer id for the body
		 * mass Float new restitution value
		 */
		SET_RIGIDBODY_RESTITUTION: 'SET_RIGIDBODY_RESTITUTION',

		/**
		 * sets the specified rigid body's friction
		 * body_id Integer unique integer id for the body
		 * mass Float new friction value
		 */
		SET_RIGIDBODY_FRICTION: 'SET_RIGIDBODY_FRICTION',

		/**
		 * sets the specified rigid body's linear damping
		 * body_id Integer unique integer id for the body
		 * damping Float new linear damping value
		 */
		SET_RIGIDBODY_LINEAR_DAMPING: 'SET_RIGIDBODY_LINEAR_DAMPING',

		/**
		 * sets the specified rigid body's angular damping
		 * body_id Integer unique integer id for the body
		 * damping Float new angular damping value
		 */
		SET_RIGIDBODY_ANGULAR_DAMPING: 'SET_RIGIDBODY_ANGULAR_DAMPING',

		/**
		 * sets the specified rigid body's collision groups
		 * body_id Integer unique integer id for the body
		 * groups Integer new collision group value
		 */
		SET_RIGIDBODY_COLLISION_GROUPS: 'SET_RIGIDBODY_COLLISION_GROUPS',

		/**
		 * sets the specified rigid body's collision mask
		 * body_id Integer unique integer id for the body
		 * mask Integer new collision mask value
		 */
		SET_RIGIDBODY_COLLISION_MASK: 'SET_RIGIDBODY_COLLISION_MASK',

		/**
		 * sets the specified rigid body's position & rotation
		 * body_id Integer unique integer id for the body
		 * position Object new coordinates for the body's position, {x:x, y:y, z:z}
		 * rotation Object new quaternion values {x:x, y:y, z:z, w:w}
		 */
		SET_RIGIDBODY_TRANSFORM: 'SET_RIGIDBODY_TRANSFORM',

		/**
		 * sets the specified rigid body's linear velocity
		 * body_id Integer unique integer id for the body
		 * velocity Object new values for the body's linear velocity, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_LINEAR_VELOCITY: 'SET_RIGIDBODY_LINEAR_VELOCITY',

		/**
		 * sets the specified rigid body's angular velocity
		 * body_id Integer unique integer id for the body
		 * velocity Object new values for the body's angular velocity, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_ANGULAR_VELOCITY: 'SET_RIGIDBODY_ANGULAR_VELOCITY',

		/**
		 * sets the specified rigid body's linear factor
		 * body_id Integer unique integer id for the body
		 * factor Object new values for the body's linear factor, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_LINEAR_FACTOR: 'SET_RIGIDBODY_LINEAR_FACTOR',

		/**
		 * sets the specified rigid body's angular factor
		 * body_id Integer unique integer id for the body
		 * factor Object new values for the body's angular factor, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_ANGULAR_FACTOR: 'SET_RIGIDBODY_ANGULAR_FACTOR',

		/**
		 * steps the physics simulation
		 * time_delta Float total amount of time, in seconds, to step the simulation by
		 * [max_step] Float maximum step of size, in seconds [default is value of `time_delta`]
		 */
		STEP_SIMULATION: 'STEP_SIMULATION',

		/**
		 * performs ray traces
		 * raytrace_id unique identifier for this request
		 * rays Array[ { start: { x:x, y:y, z:z }, end: { x:x, y:y, z:z } } ]
		 */
		RAYTRACE: 'RAYTRACE',

		/**
		 * results of a raytrace request
		 * raytrace_id unique identifier of the request
		 * results Array[ Array[ { body_id:body_id, point: { x:x, y:y, z:z }, normal: { x:x, y:y, z:z } } ] ]
		 */
		RAYTRACE_RESULTS: 'RAYTRACE_RESULTS',

		/**
		 * adds a constraint on one or two bodies to the world
		 * entirety of the message body corresponds to the type of constraint (see CONSTRAINT_TYPES)
		 */
		ADD_CONSTRAINT: 'ADD_CONSTRAINT'
	};

	var CONSTRAINT_TYPES = {
	    /**
	     * constraint_type String type of constraint
	     * constraint_id Number id of the constraint
	     * body_a_id Number id of body_a
	     * hinge_axis Object axis in body_a the hinge revolves around {x:x, y:y, z:z}
	     * point_a Object point in body_a the hinge revolves around {x:x, y:y, z:z}
	     * body_b_id [optional] Number id of body_b
	     * point_b [optional] Object point in body_b the hinge revolves around {x:x, y:y, z:z}
	     * active Boolean whether or not the constraint is enabled
	     * factor: Number factor applied to constraint, 0-1
	     * breaking_threshold: Number amount of force which, if exceeded, de-activates the constraint
	     * limit.enabled Boolean whether or not the limits are set
	     * limit.lower Number lower bound of limit
	     * limit.upper Number upper bound of limit
	     * motor.enabled Boolean whether or not the motor is on
	     * motor.torque Number maximum torque the motor can apply
	     * motor.max_speed Number maximum speed the motor can reach under its own power
	     */
	    HINGE: 'HINGE',

		/**
		 * constraint_type String type of constraint
		 * constraint_id Number id of the constraint
		 * body_a_id Number id of body_a
		 * point_a Object point in body_a the constraint revolves around {x:x, y:y, z:z}
		 * body_b_id [optional] Number id of body_b
		 * point_b [optional] Object point in body_b the constraint revolves around {x:x, y:y, z:z}
		 * active Boolean whether or not the constraint is enabled
		 * factor: Number factor applied to constraint, 0-1
		 * breaking_threshold: Number amount of force which, if exceeded, de-activates the constraint
		 */
	    POINT: 'POINT',

		/**
		 * constraint_type String type of constraint
		 * constraint_id Number id of the constraint
		 * body_a_id Number id of body_a
		 * hinge_a Object axis in body_a the constraint allows linear translation {x:x, y:y, z:z}
		 * body_b_id [optional] Number id of body_b
		 * active Boolean whether or not the constraint is enabled
		 * factor: Number factor applied to constraint, 0-1
		 * breaking_threshold: Number amount of force which, if exceeded, de-activates the constraint
		 */
		SLIDER: 'SLIDER',

		/**
		 * constraint_type String type of constraint
		 * constraint_id Number id of the constraint
		 * body_a_id Number id of body_a
		 * point_a Object point in body_a the constraint is welded at {x:x, y:y, z:z}
		 * body_b_id [optional] Number id of body_b
		 * point_b [optional] Object point in body_b the constraint is welded at {x:x, y:y, z:z}
		 * active Boolean whether or not the constraint is enabled
		 * factor: Number factor applied to constraint, 0-1
		 * breaking_threshold: Number amount of force which, if exceeded, de-activates the constraint
		 */
		WELD: 'WELD',
	}

	var CONTACT_TYPES = {
		START: 0,
		CONTINUE: 1,
		END: 2
	};

	var BODY_TYPES = {
		/**
		 * width Float box extent on x axis
		 * height Float box extent on y axis
		 * depth Float box extent on z axis
		 */
		BOX: 'BOX',

		/**
		 * shapes Array list of shape definitions composing the compound shape
		 */
		COMPOUND: 'COMPOUND',

		/**
		 * radius Float cylinder radius
		 * height Float cylinder extent on y axis
		 */
		CONE: 'CONE',

		/**
		 * vertices Array list of vertex components for all vertices, where list is [x1, y1, z1, x2, y2, z2 ... xN, yN, zN]
		 */
		CONVEX: 'CONVEX',

		/**
		 * radius Float cylinder radius
		 * height Float cylinder extent on y axis
		 */
		CYLINDER: 'CYLINDER',

		/**
		 * width Float plane extent on x axis
		 * height Float plane extent on y axis
		 */
		PLANE: 'PLANE',

		/**
		 * radius Float radius of the sphere
		 */
		SPHERE: 'SPHERE',

		/**
		 * vertices Array list of vertex components for all vertices, where list is [x1, y1, z1, x2, y2, z2 ... xN, yN, zN]
		 * faces Array list of vertex indexes composing the faces
		 */
		TRIANGLE: 'TRIANGLE'
	}

	var _tmp_vector3_2 = new Goblin.Vector3();

	// report-related variables and constants
	function ensureReportSize( report, report_size, chunk_size ) {
		var needed_buffer_size = ( report_size + 3 ) + chunk_size - report_size % chunk_size; // the +2 is to
			// add an array element to hold the report type, number of ticks simulation has gone through, and length of array data
		if ( report.length < needed_buffer_size ) {
			report = new Float32Array( needed_buffer_size );
		}
		return report;
	}
	var WORLD_REPORT_SIZE_RIGIDBODY = 30; // 1 body id + 16 matrix elements + 3 position elements + 4 rotation elements + 3 linear velocity + 3 angular_velocity
	var WORLD_REPORT_CHUNK_SIZE = 100 * WORLD_REPORT_SIZE_RIGIDBODY; // increase buffer by enough to hold 100 objects each time
	var world_report = new Float32Array( 0 );

	var COLLISION_REPORT_SIZE = 16; // 2 body ids + 4 Vector3s + penetration depth
	var COLLISION_REPORT_CHUNK_SIZE = 100 * COLLISION_REPORT_SIZE;
	var collision_report = new Float32Array( 0 );

	var CONSTRAINT_REPORT_SIZE = 5; // 1 constraint id + 1 element for active flag + 3 elements for last impulse
	var CONSTRAINT_REPORT_CHUNK_SIZE = 10 * CONSTRAINT_REPORT_SIZE;
	var constraint_report = new Float32Array( 0 );

	// global variables for the simulation
	var world;
	var id_body_map = {}; // maps scene's body ids (provided from Physijs) to body
	var body_id_map = {}; //  // maps the goblin body id to Physijs' body id
	var id_constraint_map = {}; // maps the constraint ids (provided from Physijs) to body
	var constraint_id_map = {}; // maps the goblin constraint id to Physijs' constraint id
	var collision_events = [];

	function postMessage( type, parameters ) {
		self.postMessage({
			type: type,
			parameters: parameters
		});
	}

	function postReport( report ) {
		self.postMessage( report, [report.buffer] );
	}

	function reportWorld() {
		// compute necessary buffer size
		var rigid_body_ids = Object.keys( id_body_map );
		var rigid_bodies_count = rigid_body_ids.length;
		var report_size = ( WORLD_REPORT_SIZE_RIGIDBODY * rigid_bodies_count ); // elements needed to report bodies
		world_report = ensureReportSize( world_report, report_size, WORLD_REPORT_CHUNK_SIZE );

		// populate the report
		var idx = 0;
		world_report[idx++] = MESSAGE_TYPES.REPORTS.WORLD;
		world_report[idx++] = world.ticks;
		world_report[idx++] = rigid_bodies_count;

		for ( var i = 0; i < rigid_bodies_count; i++ ) {
			var rigid_body_id = rigid_body_ids[ i ];
			var rigid_body = id_body_map[ rigid_body_id ];
			world_report[idx++] = rigid_body_id;

			world_report[idx++] = rigid_body.transform.e00;
			world_report[idx++] = rigid_body.transform.e01;
			world_report[idx++] = rigid_body.transform.e02;
			world_report[idx++] = rigid_body.transform.e03;

			world_report[idx++] = rigid_body.transform.e10;
			world_report[idx++] = rigid_body.transform.e11;
			world_report[idx++] = rigid_body.transform.e12;
			world_report[idx++] = rigid_body.transform.e13;

			world_report[idx++] = rigid_body.transform.e20;
			world_report[idx++] = rigid_body.transform.e21;
			world_report[idx++] = rigid_body.transform.e22;
			world_report[idx++] = rigid_body.transform.e23;

			world_report[idx++] = rigid_body.transform.e30;
			world_report[idx++] = rigid_body.transform.e31;
			world_report[idx++] = rigid_body.transform.e32;
			world_report[idx++] = rigid_body.transform.e33;

			world_report[idx++] = rigid_body.position.x;
			world_report[idx++] = rigid_body.position.y;
			world_report[idx++] = rigid_body.position.z;

			world_report[idx++] = rigid_body.rotation.x;
			world_report[idx++] = rigid_body.rotation.y;
			world_report[idx++] = rigid_body.rotation.z;
			world_report[idx++] = rigid_body.rotation.w;

			world_report[idx++] = rigid_body.linear_velocity.x;
			world_report[idx++] = rigid_body.linear_velocity.y;
			world_report[idx++] = rigid_body.linear_velocity.z;

			world_report[idx++] = rigid_body.angular_velocity.x;
			world_report[idx++] = rigid_body.angular_velocity.y;
			world_report[idx++] = rigid_body.angular_velocity.z;
		}

		postReport( world_report );
	}

	function reportCollisions() {
		// divided by 2 because each new collision triggers two `contact` events and the second is a duplicate
		// divided by 10 as each entry in `collision_events` spans ten indices
		var event_size = 10;
		var collision_events_count = collision_events.length / 2 / event_size;

		// compute buffer size
		var report_size = ( COLLISION_REPORT_SIZE * collision_events_count ); // elements needed to report collisions
		collision_report = ensureReportSize( collision_report, report_size, COLLISION_REPORT_CHUNK_SIZE );
		collision_report[0] = MESSAGE_TYPES.REPORTS.COLLISIONS;
		collision_report[1] = collision_events_count;

		var report_idx = 2;

		for ( var i = 0; i < collision_events.length; i += 2 * event_size ) { // multiply by 2 to skip the same contact event for the other object
			var object_a = collision_events[i+1];
			var object_b = collision_events[i+2];
			var contact = collision_events[i+3];

			collision_report[report_idx+0] = collision_events[i+0];

			collision_report[report_idx+1] = body_id_map[ object_a.id ];
			collision_report[report_idx+2] = body_id_map[ object_b.id ];

			collision_report[report_idx+3] = contact ? contact.contact_point.x : 0;
			collision_report[report_idx+4] = contact ? contact.contact_point.y : 0;
			collision_report[report_idx+5] = contact ? contact.contact_point.z : 0;

			collision_report[report_idx+6] = contact ? contact.contact_normal.x : 0;
			collision_report[report_idx+7] = contact ? contact.contact_normal.y : 0;
			collision_report[report_idx+8] = contact ? contact.contact_normal.z : 0;

			collision_report[report_idx+9] = collision_events[i+4];
			collision_report[report_idx+10] = collision_events[i+5];
			collision_report[report_idx+11] = collision_events[i+6];

			collision_report[report_idx+12] = collision_events[i+7];
			collision_report[report_idx+13] = collision_events[i+8];
			collision_report[report_idx+14] = collision_events[i+9];

			collision_report[report_idx+15] = contact ? contact.penetration_depth : 0;

			report_idx += COLLISION_REPORT_SIZE;
		}

		collision_events.length = 0;

		postReport( collision_report );
	}

	function reportConstraints() {
		// compute necessary buffer size
		var constraint_ids = Object.keys( id_constraint_map );
		var constraints_count = constraint_ids.length;
		var report_size = ( CONSTRAINT_REPORT_SIZE * constraints_count ); // elements needed to report bodies
		constraint_report = ensureReportSize( constraint_report, report_size, CONSTRAINT_REPORT_CHUNK_SIZE );

		// populate the report
		var report_idx = 0;
		constraint_report[report_idx++] = MESSAGE_TYPES.REPORTS.CONSTRAINTS;
		constraint_report[report_idx++] = constraints_count;

		for ( var i = 0; i < constraints_count; i++ ) {
			var constraint_id = constraint_ids[ i ];
			var constraint = id_constraint_map[ constraint_id ];
			constraint_report[report_idx] = constraint_id;

			constraint_report[report_idx+1] = constraint.active;

			constraint_report[report_idx+2] = constraint.last_impulse.x;
			constraint_report[report_idx+3] = constraint.last_impulse.y;
			constraint_report[report_idx+4] = constraint.last_impulse.z;

			report_idx += CONSTRAINT_REPORT_SIZE;
		}

		postReport( constraint_report );
	}

	function getShapeForDefinition( shape_definition ) {
		var shape;

		if ( shape_definition.body_type === BODY_TYPES.BOX ) {
			shape = new Goblin.BoxShape(shape_definition.width, shape_definition.height, shape_definition.depth);
		} else if ( shape_definition.body_type === BODY_TYPES.COMPOUND ) {
			shape = new Goblin.CompoundShape();
			shape_definition.shapes.forEach(function( child_shape ) {
				shape.addChildShape(
					getShapeForDefinition( child_shape.shape_definition ),
					new Goblin.Vector3( child_shape.position.x, child_shape.position.y, child_shape.position.z ),
					new Goblin.Quaternion( child_shape.quaternion.x, child_shape.quaternion.y, child_shape.quaternion.z, child_shape.quaternion.w )
				);
			});
		} else if ( shape_definition.body_type === BODY_TYPES.CONE ) {
			shape = new Goblin.ConeShape(shape_definition.radius, shape_definition.height);
		} else if ( shape_definition.body_type === BODY_TYPES.CONVEX ) {
			shape = new Goblin.ConvexShape(
				shape_definition.vertices.reduce(
					function( vertices, component, idx, source ) {
						if (idx % 3 == 0) {
							vertices.push(
								new Goblin.Vector3( source[idx], source[idx+1], source[idx+2] )
							);
						}
						return vertices;
					},
					[]
				)
			);
		} else if ( shape_definition.body_type === BODY_TYPES.CYLINDER ) {
			shape = new Goblin.CylinderShape( shape_definition.radius, shape_definition.height );
		} else if ( shape_definition.body_type === BODY_TYPES.PLANE ) {
			shape = new Goblin.PlaneShape( 2, shape_definition.width, shape_definition.height );
		} else if ( shape_definition.body_type === BODY_TYPES.SPHERE ) {
			shape = new Goblin.SphereShape( shape_definition.radius );
		} else if ( shape_definition.body_type === BODY_TYPES.TRIANGLE ) {
			shape = new Goblin.MeshShape(
				shape_definition.vertices.reduce(
					function( vertices, component, idx, source ) {
						if (idx % 3 == 0) {
							vertices.push(
								new Goblin.Vector3( source[idx], source[idx+1], source[idx+2] )
							);
						}
						return vertices;
					},
					[]
				),
				shape_definition.faces
			);
		}

		return shape;
	}

	// message handling
	(function() {
		var handlers = {};
		function handleMessage( message, handler ) {
			handlers[message] = handler;
		}
		self.addEventListener(
			'message',
			function(e) {
				var data = e.data;
				var type;
				var parameters;

				if ( data instanceof Float32Array ) {
					type = data[0];
					parameters = data;
				} else {
					data = data || {};
					type = data.type;
					parameters = data.parameters;
				}

				if ( handlers.hasOwnProperty( type ) ) {
					handlers[type]( parameters );
				} else {
					throw new Error( 'Physijs worker received unknown message type: ' + type );
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.REPORTS.WORLD,
			function( report ) {
				world_report = report;
			}
		);

		handleMessage(
			MESSAGE_TYPES.REPORTS.COLLISIONS,
			function( report ) {
				collision_report = report;
			}
		);

		handleMessage(
			MESSAGE_TYPES.REPORTS.CONSTRAINTS,
			function( report ) {
				constraint_report = report;
			}
		);

		handleMessage(
			MESSAGE_TYPES.INITIALIZE,
			function( parameters ) {
				var broadphase = parameters.broadphase === 'naive' ? new Goblin.BasicBroadphase() : new Goblin.SAPBroadphase();

				world = new Goblin.World(
					broadphase,
					new Goblin.NarrowPhase(),
					new Goblin.IterativeSolver()
				);

				if ( parameters.hasOwnProperty('gravity') ) {
					world.gravity.set( parameters.gravity.x, parameters.gravity.y, parameters.gravity.z );
				}

				if ( parameters.hasOwnProperty('solver_max_iterations') ) {
					world.solver.max_iterations = parameters.solver_max_iterations;
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.ADD_GHOSTBODY,
			function( parameters ) {
				var shape_definition = parameters.shape_definition;
				var shape = getShapeForDefinition( shape_definition );
				var body = new Goblin.GhostBody( shape );

				body.collision_groups = parameters.collision_groups;
				body.collision_mask = parameters.collision_mask;

				body.addListener(
					'contact',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.START, this, other_body, contact );

						// find relative velocities
						_tmp_vector3_1.subtractVectors( other_body.linear_velocity, this.linear_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );

						_tmp_vector3_1.subtractVectors( other_body.angular_velocity, this.angular_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );
					}
				);

				body.addListener(
					'endAllContact',
					function( other_body ) {
						collision_events.push( CONTACT_TYPES.END, this, other_body, null );

						// find relative velocities
						_tmp_vector3_1.subtractVectors( other_body.linear_velocity, this.linear_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );

						_tmp_vector3_1.subtractVectors( other_body.angular_velocity, this.angular_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );
					}
				);

				body.addListener(
					'contactStart',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.START, this, other_body, contact );

						// find relative velocities
						collision_events.push( other_body.linear_velocity.x, other_body.linear_velocity.y, other_body.linear_velocity.z );
						collision_events.push( other_body.angular_velocity.x, other_body.angular_velocity.y, other_body.angular_velocity.z );
					}
				);

				body.addListener(
					'contactContinue',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.CONTINUE, this, other_body, contact );

						// find relative velocities
						collision_events.push( other_body.linear_velocity.x, other_body.linear_velocity.y, other_body.linear_velocity.z );
						collision_events.push( other_body.angular_velocity.x, other_body.angular_velocity.y, other_body.angular_velocity.z );
					}
				);

				body.addListener(
					'contactEnd',
					function( other_body ) {
						collision_events.push( CONTACT_TYPES.END, this, other_body, null );

						// find relative velocities
						collision_events.push( other_body.linear_velocity.x, other_body.linear_velocity.y, other_body.linear_velocity.z );
						collision_events.push( other_body.angular_velocity.x, other_body.angular_velocity.y, other_body.angular_velocity.z );
					}
				);

				world.addGhostBody( body );

				id_body_map[ parameters.body_id ] = body;
				body_id_map[ body.id ] = parameters.body_id;
			}
		);

		handleMessage(
			MESSAGE_TYPES.ADD_RIGIDBODY,
			function( parameters ) {
				var shape_definition = parameters.shape_definition;
				var shape = getShapeForDefinition( shape_definition );
				var body = new Goblin.RigidBody( shape, parameters.mass );

				body.restitution = parameters.restitution;
				body.friction = parameters.friction;
				body.linear_damping = parameters.linear_damping;
				body.angular_damping = parameters.angular_damping;
				body.collision_groups = parameters.collision_groups;
				body.collision_mask = parameters.collision_mask;

				body.addListener(
					'contact',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.START, this, other_body, contact );

						// find relative velocities
						_tmp_vector3_1.subtractVectors( other_body.linear_velocity, this.linear_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );

						_tmp_vector3_1.subtractVectors( other_body.angular_velocity, this.angular_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );
					}
				);

				body.addListener(
					'endAllContact',
					function( other_body ) {
						collision_events.push( CONTACT_TYPES.END, this, other_body, null );

						// find relative velocities
						_tmp_vector3_1.subtractVectors( other_body.linear_velocity, this.linear_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );

						_tmp_vector3_1.subtractVectors( other_body.angular_velocity, this.angular_velocity );
						collision_events.push( _tmp_vector3_1.x, _tmp_vector3_1.y, _tmp_vector3_1.z );
					}
				);

				body.addListener(
					'contactStart',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.START, this, other_body, contact );

						// find relative velocities
						collision_events.push( this.linear_velocity.x, this.linear_velocity.y, this.linear_velocity.z );
						collision_events.push( this.angular_velocity.x, this.angular_velocity.y, this.angular_velocity.z );
					}
				);

				body.addListener(
					'contactContinue',
					function( other_body, contact ) {
						collision_events.push( CONTACT_TYPES.CONTINUE, this, other_body, contact );

						// find relative velocities
						collision_events.push( this.linear_velocity.x, this.linear_velocity.y, this.linear_velocity.z );
						collision_events.push( this.angular_velocity.x, this.angular_velocity.y, this.angular_velocity.z );
					}
				);

				body.addListener(
					'contactEnd',
					function( other_body ) {
						collision_events.push( CONTACT_TYPES.END, this, other_body, null );

						// find relative velocities
						collision_events.push( this.linear_velocity.x, this.linear_velocity.y, this.linear_velocity.z );
						collision_events.push( this.angular_velocity.x, this.angular_velocity.y, this.angular_velocity.z );
					}
				);

				world.addRigidBody( body );

				id_body_map[ parameters.body_id ] = body;
				body_id_map[ body.id ] = parameters.body_id;
			}
		);

		handleMessage(
			MESSAGE_TYPES.APPLY_FORCE,
			function( parameters ) {
				var body_id = parameters.body_id;
				var body = id_body_map[ body_id ];
				_tmp_vector3_1.set( parameters.force.x, parameters.force.y, parameters.force.z );
				_tmp_vector3_2.set( parameters.local_location.x, parameters.local_location.y, parameters.local_location.z );
				body.applyForceAtLocalPoint( _tmp_vector3_1, _tmp_vector3_2 );
			}
		);

		handleMessage(
			MESSAGE_TYPES.REMOVE_CONSTRAINT,
			function( parameters ) {
				var constraint_id = parameters.constraint_id;
				var constraint = id_constraint_map[ constraint_id ];
				world.removeConstraint( constraint );
				delete id_constraint_map[ constraint_id ];
			}
		);

		handleMessage(
			MESSAGE_TYPES.REMOVE_GHOSTBODY,
			function( parameters ) {
				var body_id = parameters.body_id;
				var body = id_body_map[ body_id ];
				world.removeGhostBody( body );
				delete id_body_map[ body_id ];
			}
		);
		
		handleMessage(
			MESSAGE_TYPES.REMOVE_RIGIDBODY,
			function( parameters ) {
				var body_id = parameters.body_id;
				var body = id_body_map[ body_id ];
				world.removeRigidBody( body );
				delete id_body_map[ body_id ];
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_CONSTRAINT_ACTIVE,
			function( parameters ) {
				id_constraint_map[ parameters.constraint_id ].active = parameters.active;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_CONSTRAINT_FACTOR,
			function( parameters ) {
				id_constraint_map[ parameters.constraint_id ].factor = parameters.factor;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_CONSTRAINT_BREAKING_THRESHOLD,
			function( parameters ) {
				id_constraint_map[ parameters.constraint_id ].breaking_threshold = parameters.breaking_threshold;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_CONSTRAINT_LIMIT,
			function( parameters ) {
				if ( parameters.enabled === false ) {
					id_constraint_map[ parameters.constraint_id ].limit.set( null, null );
				} else {
					id_constraint_map[ parameters.constraint_id ].limit.set( parameters.lower, parameters.upper );
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_CONSTRAINT_MOTOR,
			function( parameters ) {
				if ( parameters.enabled === false ) {
					id_constraint_map[ parameters.constraint_id ].motor.set( null, null );
				} else {
					id_constraint_map[ parameters.constraint_id ].motor.set( parameters.torque, parameters.max_speed );
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_MASS,
			function( parameters ) {
				id_body_map[ parameters.body_id ].mass = parameters.mass;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_RESTITUTION,
			function( parameters ) {
				id_body_map[ parameters.body_id ].restitution = parameters.restitution;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_FRICTION,
			function( parameters ) {
				id_body_map[ parameters.body_id ].friction = parameters.friction;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_DAMPING,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_damping = parameters.damping;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_DAMPING,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_damping = parameters.damping;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_COLLISION_GROUPS,
			function( parameters ) {
				id_body_map[ parameters.body_id ].collision_groups = parameters.collision_groups;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_COLLISION_MASK,
			function( parameters ) {
				id_body_map[ parameters.body_id ].collision_mask = parameters.collision_mask;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_TRANSFORM,
			function( parameters ) {
				id_body_map[ parameters.body_id ].position.set(
					parameters.position.x,
					parameters.position.y,
					parameters.position.z
				);

				id_body_map[ parameters.body_id ].rotation.set(
					parameters.rotation.x,
					parameters.rotation.y,
					parameters.rotation.z,
					parameters.rotation.w
				);

				id_body_map[ parameters.body_id ].updateDerived();
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_VELOCITY,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_velocity.set(
					parameters.velocity.x,
					parameters.velocity.y,
					parameters.velocity.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_VELOCITY,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_velocity.set(
					parameters.velocity.x,
					parameters.velocity.y,
					parameters.velocity.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_FACTOR,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_factor.set(
					parameters.factor.x,
					parameters.factor.y,
					parameters.factor.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_FACTOR,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_factor.set(
					parameters.factor.x,
					parameters.factor.y,
					parameters.factor.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.STEP_SIMULATION,
			function( parameters ) {
				world.step( parameters.time_delta, parameters.max_step );
				reportWorld();
				reportCollisions();
				reportConstraints();
			}
		);

		handleMessage(
			MESSAGE_TYPES.RAYTRACE,
			function( parameters ) {
				var ray_start = new Goblin.Vector3();
				var ray_end = new Goblin.Vector3();
				var results = parameters.rays.map(function( ray ) {
					ray_start.set( ray.start.x, ray.start.y, ray.start.z );
					ray_end.set( ray.end.x, ray.end.y, ray.end.z );
					var intersections = world.rayIntersect( ray_start, ray_end );
					return intersections.map(function(intersection) {
						var mapped_body = body_id_map[ intersection.object.id ];

						// only return an intersection if this body is tracked outside this worker
						if ( mapped_body == null ) {
							return null;
						}

						return {
							body_id: intersection.object.id,
							point: { x: intersection.point.x, y: intersection.point.y, z: intersection.point.z },
							normal: { x: intersection.normal.x, y: intersection.normal.y, z: intersection.normal.z },
						};
					}).filter(function(intersection) {
						return intersection != null;
					});
				});

				postMessage(
					MESSAGE_TYPES.RAYTRACE_RESULTS,
					{
						raytrace_id: parameters.raytrace_id,
						results: results
					}
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.ADD_CONSTRAINT,
			function( parameters ) {
				var constraint;

				if ( parameters.constraint_type === CONSTRAINT_TYPES.HINGE ) {
					constraint = new Goblin.HingeConstraint(
						id_body_map[ parameters.body_a_id ],
						new Goblin.Vector3( parameters.hinge_axis.x, parameters.hinge_axis.y, parameters.hinge_axis.z ),
						new Goblin.Vector3( parameters.point_a.x, parameters.point_a.y, parameters.point_a.z ),
						parameters.body_b_id == null ? null : id_body_map[parameters.body_b_id],
						parameters.body_b_id == null ? null : new Goblin.Vector3( parameters.point_b.x, parameters.point_b.y, parameters.point_b.z )
					);
				} else if ( parameters.constraint_type === CONSTRAINT_TYPES.POINT ) {
					constraint = new Goblin.PointConstraint(
						id_body_map[ parameters.body_a_id ],
						new Goblin.Vector3( parameters.point_a.x, parameters.point_a.y, parameters.point_a.z ),
						parameters.body_b_id == null ? null : id_body_map[parameters.body_b_id],
						parameters.body_b_id == null ? null : new Goblin.Vector3( parameters.point_b.x, parameters.point_b.y, parameters.point_b.z )
					);
				} else if ( parameters.constraint_type === CONSTRAINT_TYPES.SLIDER ) {
					constraint = new Goblin.SliderConstraint(
						id_body_map[ parameters.body_a_id ],
						new Goblin.Vector3( parameters.axis_a.x, parameters.axis_a.y, parameters.axis_a.z ),
						parameters.body_b_id == null ? null : id_body_map[parameters.body_b_id]
					);
				} else if ( parameters.constraint_type === CONSTRAINT_TYPES.WELD ) {
					constraint = new Goblin.WeldConstraint(
						id_body_map[ parameters.body_a_id ],
						new Goblin.Vector3( parameters.point_a.x, parameters.point_a.y, parameters.point_a.z ),
						parameters.body_b_id == null ? null : id_body_map[parameters.body_b_id],
						parameters.body_b_id == null ? null : new Goblin.Vector3( parameters.point_b.x, parameters.point_b.y, parameters.point_b.z )
					);
				} else {
					// don't add this constraint to the world of the id maps
					return;
				}

				constraint.active = parameters.active;
				constraint.factor = parameters.factor;
				constraint.breaking_threshold = parameters.breaking_threshold;

				if ( parameters.limit && parameters.limit.enabled ) {
					constraint.limit.set( parameters.limit.lower, parameters.limit.upper );
				}

				if ( parameters.motor && parameters.motor.enabled ) {
					constraint.motor.set( parameters.motor.torque, parameters.motor.max_speed );
				}

				id_constraint_map[ parameters.constraint_id ] = constraint;
				constraint_id_map[ constraint.id ] = parameters.constraint_id;
				world.addConstraint( constraint );
			}
		);
	})();

})();