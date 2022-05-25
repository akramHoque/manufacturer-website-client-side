import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import useToken from '../hooks/UseToken';
// import useToken from '../hooks/UseToken';


const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
const [updateProfile, updating, updateError] = useUpdateProfile(auth);

const [token] = useToken(user || gUser)

 
  const navigate = useNavigate();
  let signInError ;

    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    if(error || gError || updateError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    
  if (token) {
      navigate('/purchase/:itemId');
  }
  const onSubmit = async data => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName:data.name });
      console.log('updated done') ;
     
  }

  return (
    <div className='flex h-screen justify-center items-center'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-center font-bold text-2xl">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Name</span>
                       
                    </label>
                    <input type="text" placeholder="Your Name" 

                     className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                           required :{
                                value: true ,
                                message: "Name is required"
                           }
                      })}
                     />
        <label  className="label">
       {errors.name?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>
        }
                         
    </label>
                </div>
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Email</span>
                       
                    </label>
                    <input type="email" placeholder="Your Email" 

                     className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                           required :{
                                value: true ,
                                message: "Email is required"
                           },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Give a valid Email' 
                        }
                      })}
                     />
        <label  className="label">
       {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>
        }
       {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>
        }
                        
    </label>
                </div>
                <input/>
                
                <div  className="form-control w-full max-w-xs">
                    <label  className="label">
                        <span  className="label-text">Password</span>
                       
                    </label>
                    <input type="password" placeholder="password" 

                     className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                           required :{
                                value: true ,
                                message: "password is required"
                           },
                        minLength: {
                          value: 6,
                          message: 'Must be 6 charecters or longer' 
                        }
                      })}
                     />
        <label  className="label">
       {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>
        }
       {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>
        }
                        
    </label>
                </div>
                <input/>
                {signInError}
                <input className='btn w-full max-w-xs' value='Sign Up' type="submit" />
            </form>

            <p><small>Already have an account?</small> <Link className='text-secondary' to='/login'>Please login</Link></p>

            <div className="divider">OR</div>
            <button

                className="btn btn-outline"
                onClick={() => signInWithGoogle()}
            >Continue with Google</button>
        </div>
    </div>
</div>
  );
};

export default SignUp;