[1mdiff --git a/temp_fixed.tsx b/temp_fixed.tsx[m
[1mindex 7010505..3aa6035 100644[m
[1m--- a/temp_fixed.tsx[m
[1m+++ b/temp_fixed.tsx[m
[36m@@ -375,9 +375,10 @@[m [mexport default function GetStartedPage() {[m
                             id="specialty"[m
                             name="specialty"[m
                             className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"[m
[32m+[m[32m                            defaultValue=""[m
                             required[m
                           >[m
[31m-                            <option value="" disabled selected></option>[m
[32m+[m[32m                            <option value="" disabled></option>[m
                             <option value="internal-medicine">Internal Medicine</option>[m
                             <option value="family-practice">Family Practice</option>[m
                             <option value="pediatrics">Pediatrics</option>[m
[36m@@ -405,9 +406,10 @@[m [mexport default function GetStartedPage() {[m
                             id="practice-size"[m
                             name="practice-size"[m
                             className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"[m
[32m+[m[32m                            defaultValue=""[m
                             required[m
                           >[m
[31m-                            <option value="" disabled selected></option>[m
[32m+[m[32m                            <option value="" disabled></option>[m
                             <option value="solo">Solo Provider</option>[m
                             <option value="small">2-5 Providers</option>[m
                             <option value="medium">6-10 Providers</option>[m
[36m@@ -433,9 +435,10 @@[m [mexport default function GetStartedPage() {[m
                             id="services"[m
                             name="services"[m
                             className="w-full appearance-none pt-6 pb-2 px-4 border-0 rounded-lg bg-transparent text-gray-900 focus:ring-0 outline-none transition-all group-hover:shadow-sm"[m
[32m+[m[32m                            defaultValue=""[m
                             required[m
                           >[m
[31m-                            <option value="" disabled selected></option>[m
[32m+[m[32m                            <option value="" disabled></option>[m
                             <option value="medical-billing">Medical Billing</option>[m
                             <option value="rcm">Revenue Cycle Management</option>[m
                             <option value="credentialing">Provider Credentialing</option>[m
[36m@@ -880,6 +883,7 @@[m [mexport default function GetStartedPage() {[m
             </div>[m
           </div>[m
         </div>[m
[32m+[m[32m        </div>[m
       </section>[m
     </>[m
   )[m
