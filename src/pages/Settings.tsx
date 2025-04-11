
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Bell, Globe, Shield, Cpu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Settings = () => {
  const [language, setLanguage] = useState("es");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    marketing: false
  });

  const [theme, setTheme] = useState("light");
  
  const [aiSettings, setAiSettings] = useState({
    enableAnalysis: true,
    enablePredictions: true,
    dataSharing: false,
    modelType: "balanced"
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil actualizado correctamente");
  };

  const handleSaveNotifications = () => {
    toast.success("Preferencias de notificaciones actualizadas");
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    toast.success(`Idioma cambiado a ${newLanguage === 'es' ? 'Español' : 'English'}`);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    toast.success(`Tema cambiado a ${newTheme === 'light' ? 'Claro' : 'Oscuro'}`);
  };

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Configuración de seguridad actualizada");
  };
  
  const handleSaveAiSettings = () => {
    toast.success("Configuración de IA actualizada correctamente");
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex items-center mb-6">
          <SettingsIcon className="h-6 w-6 mr-2 text-finance-primary" />
          <h1 className="text-2xl font-bold">Ajustes</h1>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Notificaciones</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Apariencia</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Seguridad</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span>Inteligencia Artificial</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Información de perfil</CardTitle>
                <CardDescription>
                  Actualiza tu información personal y de empresa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" defaultValue="Usuario FinancePro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue="usuario@financepro.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" defaultValue="Mi Empresa S.L." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fiscalid">CIF/NIF</Label>
                      <Input id="fiscalid" defaultValue="B12345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" defaultValue="Calle Principal, 123" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue="+34 600 000 000" />
                    </div>
                  </div>
                  <Button type="submit" className="mt-6">
                    Guardar cambios
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de notificaciones</CardTitle>
                <CardDescription>
                  Configura cómo y cuándo quieres recibir notificaciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificaciones por correo</p>
                      <p className="text-sm text-muted-foreground">
                        Recibe actualizaciones importantes por correo electrónico.
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificaciones push</p>
                      <p className="text-sm text-muted-foreground">
                        Recibe alertas en tu dispositivo.
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Resumen semanal</p>
                      <p className="text-sm text-muted-foreground">
                        Recibe un informe semanal de tus finanzas.
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.weekly}
                      onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing</p>
                      <p className="text-sm text-muted-foreground">
                        Recibe ofertas y novedades sobre nuestros servicios.
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>

                  <Button onClick={handleSaveNotifications}>
                    Guardar preferencias
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Apariencia e idioma</CardTitle>
                <CardDescription>
                  Personaliza la apariencia de la aplicación y selecciona tu idioma preferido.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label>Tema</Label>
                    <RadioGroup 
                      defaultValue={theme} 
                      onValueChange={handleThemeChange}
                      className="flex space-x-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="theme-light" />
                        <Label htmlFor="theme-light">Claro</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="theme-dark" />
                        <Label htmlFor="theme-dark">Oscuro</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="theme-system" />
                        <Label htmlFor="theme-system">Sistema</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Idioma</Label>
                    <RadioGroup 
                      defaultValue={language} 
                      onValueChange={handleLanguageChange}
                      className="flex space-x-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="es" id="lang-es" />
                        <Label htmlFor="lang-es">Español</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="en" id="lang-en" />
                        <Label htmlFor="lang-en">English</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>
                  Actualiza tu contraseña y configura opciones de seguridad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveSecurity}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña actual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <p className="font-medium">Autenticación de dos factores</p>
                        <p className="text-sm text-muted-foreground">
                          Añade una capa extra de seguridad a tu cuenta.
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <Button type="submit" className="mt-4">
                      Actualizar seguridad
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Inteligencia Artificial</CardTitle>
                <CardDescription>
                  Personaliza cómo la IA analiza tus datos financieros y genera predicciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Análisis Inteligente</p>
                      <p className="text-sm text-muted-foreground">
                        Permite que la IA analice tus datos financieros para sugerir mejoras.
                      </p>
                    </div>
                    <Switch 
                      checked={aiSettings.enableAnalysis}
                      onCheckedChange={(checked) => setAiSettings({...aiSettings, enableAnalysis: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Predicciones de Tendencias</p>
                      <p className="text-sm text-muted-foreground">
                        Habilita predicciones basadas en el historial de ingresos y gastos.
                      </p>
                    </div>
                    <Switch 
                      checked={aiSettings.enablePredictions}
                      onCheckedChange={(checked) => setAiSettings({...aiSettings, enablePredictions: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Compartir Datos Anónimos</p>
                      <p className="text-sm text-muted-foreground">
                        Ayuda a mejorar nuestros modelos compartiendo datos anónimos.
                      </p>
                    </div>
                    <Switch 
                      checked={aiSettings.dataSharing}
                      onCheckedChange={(checked) => setAiSettings({...aiSettings, dataSharing: checked})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ai-model">Tipo de Modelo de IA</Label>
                    <Select 
                      value={aiSettings.modelType} 
                      onValueChange={(value) => setAiSettings({...aiSettings, modelType: value})}
                    >
                      <SelectTrigger id="ai-model" className="w-full">
                        <SelectValue placeholder="Selecciona un tipo de modelo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservador (menos predicciones, más precisas)</SelectItem>
                        <SelectItem value="balanced">Equilibrado (recomendado)</SelectItem>
                        <SelectItem value="aggressive">Agresivo (más predicciones, menos precisas)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleSaveAiSettings} className="mt-2">
                    Guardar configuración de IA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
