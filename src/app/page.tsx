import PurchaseOrderForm from '@/components/purchase-order-form';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="h-32 flex items-center justify-center">
          {/* Logo Gtec Corrimãos */}
          <div className="w-36 h-36 flex items-center justify-center">
            <img 
              src="/images/logo/icon-gtec-corrimaos.png" 
              alt="Gtec Corrimãos" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Gerador de Ordem de Compra
          </h1>
          <p className="text-muted-foreground mt-2">
            Preencha o formulário abaixo para gerar um PDF de Ordem de Compra
            instantaneamente.
          </p>
        </div>
        <PurchaseOrderForm />
      </div>
    </main>
  );
}
