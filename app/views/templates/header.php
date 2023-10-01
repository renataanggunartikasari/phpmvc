<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Halaman <?= $data['judul']; ?> </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"" rel=" stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="<?= BASEURL; ?>">PHP MVC</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="<?= BASEURL; ?>">Home</a>
          <a class="nav-link" href="<?= BASEURL; ?>/siswa">Siswa</a>
          <a class="nav-link" href="<?= BASEURL; ?>/about">About</a>
          <a class="nav-link" href="<?= BASEURL; ?>/jurusan">Jurusan</a>
          <a class="nav-link" href="<?= BASEURL; ?>/kelas">Kelas</a>
          <a class="nav-link" href="<?= BASEURL; ?>/guru">Guru</a>
        </div>
      </div>
    </div>
  </nav>