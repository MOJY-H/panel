'use client'

import { cn } from "cn"
// import Link from "next/link"
// import Form from 'next/form'
import { redirect } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useAppDispatch, useAppSelector } from '@/lib/hook';
import { checkAdmin, checkUser, checkVendor , checkAdminPass , checkUserPass , checkVendorPass } from "@/lib/features/loginSlice"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  function emailInput(e : React.ChangeEvent<HTMLInputElement>){

    const email = e.target.value;

    if (email == 'user@gmail.com') {
      dispatch(checkUser());
    }else if( email == 'admin@gmail.com') {
      dispatch(checkAdmin());
    }else if( email == 'vendor@gmail.com'){
      dispatch(checkVendor());  
    }else {
      return null;
    }

    console.log(path1)
  }

  function passwordInput(e : React.ChangeEvent<HTMLInputElement>){

    const password = e.target.value;

    if (password == 'user') {
      dispatch(checkUserPass());
    }else if( password == 'admin') {
      dispatch(checkAdminPass());
    }else if( password == 'vendor'){
      dispatch(checkVendorPass());
    }else {
      return null;
    }

    console.log(path2)
  }

  function handleClick(){
    const path : string = `${path1}${path2}` ;
    console.log(path1);
    console.log(path2);
    
    if (path == ( 'user' || 'admin' || 'vendor' )) {
      
      redirect(path)
      // const flag = true;
    }else{
      redirect('/')
      // const flag = false;
      // const tempInput = "Not Found smthing like that !";
    }
    console.log(path) 

  }

  const dispatch = useAppDispatch();
  const path1 = useAppSelector(state => state.login.value1);
  const path2 = useAppSelector(state => state.login.value2);


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            {/* <Form action={''}> */}
            <FieldGroup>
              <Field>
                {/* <div>{tempInput}</div> */}
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={ emailInput }
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" onChange={ passwordInput } required />
              </Field>
              <Field>
                
                <Button onClick={ handleClick }>  
                  Login 
                </Button>

                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#  ">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
            {/* </Form> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
