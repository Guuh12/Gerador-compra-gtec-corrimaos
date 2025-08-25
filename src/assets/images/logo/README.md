# Logos da Empresa

Coloque aqui os logos da Gtec Corrimãos.

## Arquivos atuais:

### `ICO-gtec-corrimaos.ico` (Favicon)
- **Tamanho**: 16x16px, 32x32px, 48x48px
- **Formato**: ICO (formato padrão para favicons)
- **Uso**: Ícone do navegador (aba, favoritos, etc.)

### `icon-gtec-crrimaos.png` (Logo principal)
- **Tamanho**: 200x200px ou 400x400px
- **Formato**: PNG com fundo transparente
- **Uso**: Formulário principal e cabeçalhos

## Como usar no código:
```tsx
import { IMAGES } from '@/assets/images';

// Para o logo no formulário:
<img src={IMAGES.LOGO_PNG} alt="Gtec Corrimãos" />

// Para o favicon (já configurado no layout):
// O favicon é configurado automaticamente no layout.tsx
```

## Dicas:
- O favicon (.ico) é usado automaticamente pelo navegador
- O logo PNG é usado no formulário e pode ser usado em outros lugares
- Mantenha os nomes dos arquivos exatamente como estão
- Para adicionar mais variações, siga o padrão de nomenclatura
