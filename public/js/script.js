$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#formModalLabel").html("Tambah Data Siswa");
    $(".modal-footer button[type=submit]").html("Tambah Data");
  });

  $(".tampilModalUbah").on("click", function () {
    $("#formModalLabel").html("Ubah Data Siswa");
    $(".modal-footer button[type=submit]").html("Ubah Data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/phpmvc/public/siswa/ubah"
    );

    const id = $(this).data("id");

    $.ajax({
      url: "http://localhost/phpmvc/public/siswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#absen").val(data.absen);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});

$(".tombolTambahDataKelas").on("click", function () {
  $("#formModalLabelKelas").html("Tambah Data Kelas");
  $(".modal-footer button[type=submit]").html("Tambah Data");
  $("#kelas").val("");
});

$(".tampilModalUbahKelas").on("click", function () {
  $("#formModalLabelKelas").html("Ubah Data Kelas");
  $(".modal-footer button[type=submit]").html("Ubah Data");
  $(".modal-body form").attr(
    "action",
    "http://localhost/phpmvc/public/kelas/ubah"
  );

  const id = $(this).data("id");

  $.ajax({
    url: "http://localhost/phpmvc/public/kelas/getubah",
    data: {
      id: id,
    },
    method: "post",
    dataType: "json",
    success: function (data) {
      $("#kelas").val(data.kelas);
      $("#id").val(data.id);
    },
  });
});

$(".tombolTambahDatajurusan").on("click", function () {
  $("#formModalLabeljurusan").html("Tambah Data jurusan");
  $(".modal-footer button[type=submit]").html("Tambah Data");
  $("#jurusan").val("");
});

$(".tampilModalUbahjurusan").on("click", function () {
  $("#formModalLabeljurusan").html("Ubah Data jurusan");
  $(".modal-footer button[type=submit]").html("Ubah Data");
  $(".modal-body form").attr(
    "action",
    "http://localhost/phpmvc/public/jurusan/ubah"
  );

  const id = $(this).data("id");

  $.ajax({
    url: "http://localhost/phpmvc/public/jurusan/getubah",
    data: {
      id: id,
    },
    method: "post",
    dataType: "json",
    success: function (data) {
      $("#jurusan").val(data.jurusan);
      $("#deskripsi").val(data.deskripsi);
      $("#id").val(data.id);
    },
  });
});

$(".tombolTambahDataguru").on("click", function () {
  $("#formModalLabelguru").html("Tambah Data guru");
  $(".modal-footer button[type=submit]").html("Tambah Data");
  $("#guru").val("");
});

$(".tampilModalUbahguru").on("click", function () {
  $("#formModalLabelguru").html("Ubah Data guru");
  $(".modal-footer button[type=submit]").html("Ubah Data");
  $(".modal-body form").attr(
    "action",
    "http://localhost/phpmvc/public/guru/ubah"
  );

  const id = $(this).data("id");

  $.ajax({
    url: "http://localhost/phpmvc/public/guru/getubah",
    data: {
      id: id,
    },
    method: "post",
    dataType: "json",
    success: function (data) {
      $("#nama").val(data.nama);
      $("#mapel").val(data.mapel);
      $("#id").val(data.id);
    },
  });
});
