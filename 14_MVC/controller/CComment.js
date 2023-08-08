const comment=require('../model/MComment')


exports.main = (req, res) => {
    res.render('index');
};

exports.comment = (req, res) => {
    res.render('comments', { commentInfos: Comment.comment() });
};

exports.comment =(req, res) => {
    //console.log(req.params);
    //console.log(req.params.id);
    const commentId = req.params.id;
    const comments=Comment.comments();
    console.log(comments[commentId - 1]);
    res.render('comment', { commentInfo: comments[commentId - 1] });
}