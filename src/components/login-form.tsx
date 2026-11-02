'use client'

import { cn } from "cn"
import { useRouter } from "next/navigation"
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
import {useTranslations} from 'next-intl';

export default function LoginForm({
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

  const router = useRouter();

  function handleClick(){
    const path : string = `${path1}${path2}` ;
    console.log(path1);
    console.log(path2);


    if (path == ( 'admin')) {
      router.push('/admin/home');
    }else if(path == ('vendor')){
      router.push('/vendor/home');
    }else if(path == ('user')){
      router.push('/user/home')
    }else{
      router.push('/')
    }
    console.log(path);
  }


  const dispatch = useAppDispatch();
  const path1 = useAppSelector(state => state.login.value1);
  const path2 = useAppSelector(state => state.login.value2);

  const t = useTranslations('Login');

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>
            {t('describe')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">{t('email')}</FieldLabel> 
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
                  <FieldLabel htmlFor="password">{t('password')}</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {t('forgot-your-password')}
                  </a>
                </div>
                <Input id="password" type="password" onChange={ passwordInput } required />
              </Field>
              <Field>
                
                <Button onClick={ handleClick }>  
                  {t('login')} 
                </Button>

                <Button variant="outline" type="button">
                  {t('login-with-google')}
                </Button>
                <FieldDescription className="text-center">
                  {t('dont-have-acc')} <a href="#  ">{t('sign-up')}</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
