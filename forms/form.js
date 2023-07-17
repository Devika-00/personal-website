
$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxrr_RtGB8Zk4SMtVzLOszTbx-5ZWZ_432g2u8qDqSfnWgqth4XKAoJu0vGqFndQS3Q/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          // window.location.reload()
          window.location.href="index.html"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})