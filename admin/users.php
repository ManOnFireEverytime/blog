<?php

require('config/database.php');
if (!isset($_SESSION['user-id' ])){
    header('location: ' . ROOT_URL . 'login.php');
    die();
}
if(isset($_SESSION['user-id'])){
    $id = filter_var($_SESSION['user-id'], FILTER_SANITIZE_NUMBER_INT);
    $query = "SELECT avatar FROM users WHERE id=$id";
    $result = mysqli_query($connection, $query);
    $avatar = mysqli_fetch_assoc($result);
}
?>
<!DOCTYPE html>
<html lang="zxx" class="js"></html>

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="A powerful and conceptual apps base dashboard template that especially build for developers and programmers.">
    <link rel="shortcut icon" href="images/favicon.png">
    <title>Axel Blog Users</title>
    <link rel="stylesheet" href="<?= ROOT_URL ?>assets/css/dashlite.css?ver=3.0.3">
    <link id="skin-default" rel="stylesheet" href="<?= ROOT_URL ?>assets/css/theme.css?ver=3.0.3">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91615293-4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-91615293-4');
    </script>
</head>

<body class="nk-body bg-lighter npc-general has-sidebar ">
    <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand"><a href="index.php" class="logo-link nk-sidebar-logo"><img class="logo-light logo-img" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo"><img class="logo-dark logo-img" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt="logo-dark"><img class="logo-small logo-img logo-img-small" src="images/logo-small.png" srcset="images/logo-small2x.png 2x" alt="logo-small"></a></div>
                    <div
                        class="nk-menu-trigger me-n2"><a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a><a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div>
            </div>
            <div class="nk-sidebar-element">
                <div class="nk-sidebar-content">
                    <div class="nk-sidebar-menu" data-simplebar>
                        <ul class="nk-menu">
                            <li class="nk-menu-item"><a href="index.php" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-dashboard-fill"></em></span><span class="nk-menu-text">Dashboard</span></a></li>
                            <li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-book-fill"></em></span><span class="nk-menu-text">Posts</span></a>
                                <ul class="nk-menu-sub">

                                    <li class="nk-menu-item"><a href="posts.php" class="nk-menu-link"><span class="nk-menu-text">Manage Posts</span></a></li>
                                </ul>
                            </li>
                            <?php if(isset($_SESSION['user_is_admin'])) : ?>
                            <li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-user-fill"></em></span><span class="nk-menu-text">Users</span></a>
                                <ul class="nk-menu-sub">
                                                                        <li class="nk-menu-item"><a href="users.php" class="nk-menu-link"><span class="nk-menu-text">Manage Users</span></a></li>
                                </ul>
                            </li>
                            <li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-property-add"></em></span><span class="nk-menu-text">Categories</span></a>
                                <ul class="nk-menu-sub">
                                    <li class="nk-menu-item"><a href="categories.php" class="nk-menu-link"><span class="nk-menu-text">Manage Categories</span></a></li>
                                </ul>
                            </li>
                            <?php endif ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="nk-wrap ">
            <div class="nk-header nk-header-fixed is-light">
                <div class="container-fluid">
                    <div class="nk-header-wrap">
                        <div class="nk-menu-trigger d-xl-none ms-n1"><a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div>
                        <div class="nk-header-brand d-xl-none"><a href="index.php" class="logo-link"><img class="logo-light logo-img" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo"><img class="logo-dark logo-img" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt="logo-dark"></a></div>
                        <!-- <div class="nk-header-search ms-3 ms-xl-0"><em class="icon ni ni-search"></em><input type="text" class="form-control border-transparent form-focus-none" placeholder="Search anything"></div> -->
                    <div class="nk-header-tools">
                        <ul class="nk-quick-nav">
                            <li class="dropdown user-dropdown">
                                <a href="#" class="dropdown-toggle me-n1" data-bs-toggle="dropdown">
                                    <div class="user-toggle">
                                    <?php if(isset($_SESSION['user-id'])) : ?>
                                        <div class="user-avatar sm"><img src="<?= ROOT_URL . 'images' . $avatar['avatar'] ?>" alt=""></div>
                                        <?php else : ?>
                                            <div class="user-avatar sm"><img src="<?= ROOT_URL . 'images' . $avatar['avatar'] ?>" alt=""></div>
                                        <?php endif; ?>
                                        <div class="user-info d-none d-xl-block">
                                            <div class="user-status user-status-active">Administator</div>
                                            <div class="user-name dropdown-indicator">Abu Bin Ishityak</div>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end">
                                    <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                        <div class="user-card">
                                            <div class="user-avatar"><span>AB</span></div>
                                            <div class="user-info"><span class="lead-text">Abu Bin Ishtiyak</span><span class="sub-text">info@softnio.com</span></div>
                                        </div>
                                    </div>
                                    <div class="dropdown-inner">
                                        <ul class="link-list">
                                            <li><a href="<?= ROOT_URL ?>logout.php"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="nk-content ">
            <div class="container-fluid">
                <div class="nk-content-inner">
                    <div class="nk-content-body">
                        <div class="nk-block-head nk-block-head-sm">
                            <div class="nk-block-between">
                                <div class="nk-block-head-content">
                                    <h3 class="nk-block-title page-title">Users</h3>
                                </div>
                                <div class="nk-block-head-content">
                                    <div class="toggle-wrap nk-block-tools-toggle"><a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                        <div class="toggle-expand-content" data-content="pageMenu">
                                            <ul class="nk-block-tools g-3">
                                        <li class="nk-block-tools-opt d-none d-sm-block" data-bs-toggle="modal" data-bs-target="#modalCreate"><a href="#" class="btn btn-primary"><em class="icon ni ni-plus"></em><span>Add User</span></a></li>
                                        <li class="nk-block-tools-opt d-block d-sm-none" data-bs-toggle="modal" data-bs-target="#modalCreate"><a href="#" class="btn btn-icon btn-primary"><em class="icon ni ni-plus"></em></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nk-block">
                        <div class="card card-stretch">
                            <div class="card-inner-group">
                                <div class="card-inner p-0">
                                    <table class="nk-tb-list nk-tb-ulist">
                                        <thead>
                                            <tr class="nk-tb-item nk-tb-head">
                                                <!-- <th class="nk-tb-col nk-tb-col-check">
                                                    <div class="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" class="custom-control-input" id="pid-all"><label class="custom-control-label" for="pid-all"></label></div>
                                                </th> -->
                                                <th class="nk-tb-col"><span class="sub-text">Name</span></th>
                                                <th class="nk-tb-col tb-col-lg"><span class="sub-text">Username</span></th>
                                                <th class="nk-tb-col tb-col-lg"><span class="sub-text">Admin</span></th>
                                                <th class="nk-tb-col nk-tb-col-tools text-end">
                                                    <ul class="nk-tb-actions gx-1">
                                                        <li>
                                                            <!-- <div class="dropdown"><a href="#" class="btn btn-sm btn-trigger btn-icon dropdown-toggle" data-bs-toggle="dropdown" data-offset="0,5"><em class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="#"><em class="icon ni ni-archive"></em><span>Mark As Archive</span></a></li>
                                                                        <li><a href="#"><em class="icon ni ni-trash"></em><span>Remove Category</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div> -->
                                                        </li>
                                                    </ul>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="nk-tb-item">
                                                <!-- <td class="nk-tb-col nk-tb-col-check">
                                                    <div class="custom-control custom-control-sm custom-checkbox notext"><input type="checkbox" class="custom-control-input" id="pid-01"><label class="custom-control-label" for="pid-01"></label></div>
                                                </td> -->
                                                <td class="nk-tb-col">
                                                    <a href="#" class="project-title">
                                                        <div class="user-avatar"><img src="images/avatar/a-sm.jpg" alt=""></div>
                                                        <div class="project-info">
                                                            <h6 class="title">Responsive Design</h6>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td class="nk-tb-col tb-col-lg"><span>Web Development</span></td>
                                                <td class="nk-tb-col tb-col-lg"><span>Web Development</span></td>
                                                <td class="nk-tb-col nk-tb-col-tools">
                                                    <ul class="nk-tb-actions gx-1">
                                                        <li>
                                                            <div class="drodown"><a href="#" class="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a data-bs-toggle="modal" href="#modalEdit"><em class="icon ni ni-edit"></em><span>Edit Category</span></a></li>
                                                                        <li><a data-bs-toggle="modal" href="#modalDelete"><em class="icon ni ni-delete"></em><span>Delete Category</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div class="modal fade" id="modalCreate">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content"><a href="#" class="close" data-bs-dismiss="modal" aria-label="Close"> <em class="icon ni ni-cross-sm"></em></a>
                <div class="modal-body modal-body-md">
                    <h5 class="modal-title">Add User</h5>
                    <form action="#" class="pt-2">
                        <div class="row gy-3 gx-gs">
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">First Name</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. John"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Last Name</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. Doe"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Username</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. johndoe01"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Email</label>
                                    <div class="form-control-wrap"><input type="email" class="form-control" id="course-name" placeholder="e.g. johndoe@gmail.com"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Create Password</label>
                                    <div class="form-control-wrap"><input type="password" class="form-control" id="course-name" placeholder=""></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Confirm Password</label>
                                    <div class="form-control-wrap"><input type="password" class="form-control" id="course-name" placeholder=""></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-category">User Role</label>
                                    <div class="form-control-wrap"><select class="form-select js-select2" id="course-category"><option value ="0">Author</option><option value ="1">Admin</option></select></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="thumb">User Avatar</label>
                                    <div class="form-control-wrap">
                                        <div class="form-file"><input type="file" multiple class="form-file-input" id="customFile-create"><label class="form-file-label" for="customFile-create">Choose file</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group"><button data-bs-dismiss="modal" type="submit" class="btn btn-primary">Add User</button></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalEdit">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content"><a href="#" class="close" data-bs-dismiss="modal" aria-label="Close"> <em class="icon ni ni-cross-sm"></em></a>
                <div class="modal-body modal-body-md">
                    <h5 class="title">Edit User</h5>
                    <form action="#" class="pt-2">
                        <div class="row gy-3 gx-gs">
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">First Name</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. John"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Last Name</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. Doe"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Username</label>
                                    <div class="form-control-wrap"><input type="text" class="form-control" id="course-name" placeholder="e.g. johndoe01"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Email</label>
                                    <div class="form-control-wrap"><input type="email" class="form-control" id="course-name" placeholder="e.g. johndoe@gmail.com"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Create Password</label>
                                    <div class="form-control-wrap"><input type="password" class="form-control" id="course-name" placeholder=""></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-name">Confirm Password</label>
                                    <div class="form-control-wrap"><input type="password" class="form-control" id="course-name" placeholder=""></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="course-category">User Role</label>
                                    <div class="form-control-wrap"><select class="form-select js-select2" id="course-category"><option value ="0">Author</option><option value ="1">Admin</option></select></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label class="form-label" for="thumb">User Avatar</label>
                                    <div class="form-control-wrap">
                                        <div class="form-file"><input type="file" multiple class="form-file-input" id="customFile-create"><label class="form-file-label" for="customFile-create">Choose file</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group"><button data-bs-dismiss="modal" type="submit" class="btn btn-primary">Edit User</button></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalDelete">
        <div class="modal-dialog" role="document">
            <div class="modal-content"> <a href="#" class="close" data-bs-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
                <div class="modal-body modal-body-lg text-center">
                    <div class="nk-modal py-4"> <em class="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger"></em>
                        <h4 class="nk-modal-title">Are You Sure ?</h4>
                        <div class="nk-modal-text mt-n2">
                            <p class="text-soft">This event data will be removed permanently.</p>
                        </div>
                        <ul class="d-flex justify-content-center gx-4 mt-4">
                            <li><button data-bs-dismiss="modal" id="deleteEvent" class="btn btn-success">Yes, Delete it</button></li>
                            <li><button data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#editEventPopup" class="btn btn-danger btn-dim">Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="<?= ROOT_URL ?>assets/Js/bundle.js?ver=3.0.3"></script>
    <script src="<?= ROOT_URL ?>assets/Js/scripts.js?ver=3.0.3"></script>
    <script src="<?= ROOT_URL ?>assets/Js/demo-settings.js?ver=3.0.3"></script>
    <link rel="stylesheet" href="<?= ROOT_URL ?>assets/css/editors/quill.css?ver=3.0.3">
    <script src="<?= ROOT_URL ?>assets/Js/libs/editors/quill.js?ver=3.0.3"></script>
    <script src="<?= ROOT_URL ?>assets/Js/editors.js?ver=3.0.3"></script>
</body>

</html>