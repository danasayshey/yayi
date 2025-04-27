
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "姓名至少需要2個字符" }),
  email: z.string().email({ message: "請輸入有效的電子郵件地址" }),
  phone: z.string().min(8, { message: "請輸入有效的電話號碼" }),
  subject: z.string().min(2, { message: "主旨至少需要2個字符" }),
  message: z.string().min(10, { message: "訊息至少需要10個字符" }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "表單已送出",
      description: "我們會儘快回覆您的訊息，謝謝！",
    });
    form.reset();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 text-yayi-brown">聯絡我們</h1>
        <p className="text-lg mb-10 text-gray-600">
          有任何問題或需求，歡迎與我們聯繫
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-yayi-brown">電話</h3>
              <p className="text-center text-gray-600">
                (02) 1234-5678<br />
                週一至週六 09:00 - 18:00
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-yayi-brown">電子郵件</h3>
              <p className="text-center text-gray-600">
                info@yayi-cabinet.com<br />
                service@yayi-cabinet.com
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-yayi-beige hover:border-yayi-gold transition-colors">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-yayi-gold rounded-full flex items-center justify-center text-white mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-yayi-brown">門市地址</h3>
              <p className="text-center text-gray-600">
                台北市松山區某某路123號<br />
                （近捷運某某站1號出口）
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">地圖將顯示在這裡</p>
                  {/* 實際整合時可替換為 Google Maps 嵌入碼 */}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-yayi-beige">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-yayi-brown">傳送訊息給我們</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>姓名</FormLabel>
                            <FormControl>
                              <Input placeholder="請輸入您的姓名" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>聯絡電話</FormLabel>
                            <FormControl>
                              <Input placeholder="請輸入您的聯絡電話" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>電子郵件</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="請輸入您的電子郵件" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>主旨</FormLabel>
                          <FormControl>
                            <Input placeholder="請輸入訊息主旨" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>訊息內容</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="請詳細描述您的需求或問題" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-yayi-gold hover:bg-opacity-80 text-white"
                    >
                      送出訊息
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* LINE聯繫區塊 */}
        <div className="mt-16 bg-yayi-green bg-opacity-20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-3 text-yayi-brown">使用LINE聯繫更便捷</h2>
          <p className="mb-6">
            掃描QR碼或點擊下方按鈕，透過LINE與我們的客服人員直接對話
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">LINE QR碼</span>
                {/* 實際使用時替換為真實的LINE QR碼圖片 */}
              </div>
            </div>
            <Button
              className="bg-yayi-gold hover:bg-opacity-80 text-white px-8"
              onClick={() => window.open("https://line.me/R/ti/p/@123abcde", "_blank")}
            >
              加入LINE好友
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
