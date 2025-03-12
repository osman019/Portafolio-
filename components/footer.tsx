export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
<<<<<<< HEAD
            <p className="text-lg font-bold text-white">
=======
            <p className="text-lg font-bold text-primary">
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
              Osman <span className="text-destructive">Johandry</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} Osman Johandry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

